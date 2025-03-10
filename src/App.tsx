//import { useState } from 'react'
import { Avatar, Badge, Box, Card, Code, Flex, Text } from '@radix-ui/themes'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Collapsible, Form } from "radix-ui";
import { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import EqualifyLogo from './assets/equalify.svg'
//import { test } from './data/test';

type AxeResult = {
  description: string;
  help: string;
  helpUrl: string;
  id: string;
  impact: string;
  nodes: AxeNode[];
  tags: string[];
}

type AxeNode = {
  failureSummary: string;
  html: string;
}

type Editoria11yResult = {
  content: string;
  test: string;
  node: string;
}

function App() {
  const queryClient = useQueryClient()
  const [url, setUrl] = useState("");
  const [axeIncompleteResults, setAxeIncompleteResults] = useState<AxeResult[]>([]);
  const [axeViolationsResults, setAxeViolationsResults] = useState<AxeResult[]>([]);
  const [editoria11yResults, setEditoria11yResults] = useState<Editoria11yResult[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function reset() {
    /* setUrl("");
    setIsLoaded(false);
    setIsLoading(false);
    setAxeIncompleteResults([]);
    setAxeViolationsResults([]);
    setEditoria11yResults([]); */
    window.location.reload();
  }


  // Send to scan
  const { data: sendResponse } = useQuery({
    queryKey: ['sendURL'],
    queryFn: async () => {
      setIsLoading(true);
      const response = await fetch('api/generate/url', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": url })
      })
      if (!response.ok) {
        setIsLoading(false);
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
    enabled: url !== '',
  })
  const jobId = sendResponse?.jobs[0]?.jobId ? sendResponse?.jobs[0]?.jobId : "";

  // Poll until scan is complete
  useQuery({
    queryKey: ['getScanResults'],
    queryFn: async () => {
      const response = await fetch(`api/results/axe/${jobId}`, {
        method: 'GET'
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json();
      console.log(result);

      if (result.status == 'delayed' || result.status == 'active' || result.status == 'waiting') {
        console.log("Scan status: " + result.status + ", retrying...");
        queryClient.invalidateQueries({ queryKey: ['getScanResults'] });
      }
      if (result.status == 'completed') {
        //setResults(scanResults.result);
        console.log("Scan complete!");
        setIsLoading(false);
        setIsLoaded(true);
        setAxeIncompleteResults(result.result.results.incomplete);
        setAxeViolationsResults(result.result.results.violations);
        setEditoria11yResults(result.result.editoria11yResults);
      }
      return await response.json()
    },
    retry: true,
    enabled: !!jobId || isLoaded,
  });





  return (
    <>
      {(isLoading) ? (
        <LoadingSpinner />
      ) : null}
      <Box width={{ initial: '60vw' }} className='main'>
        <img src={EqualifyLogo} className='equalify-logo' />
        <Form.Root
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            setUrl(formData.get("url") as string);
          }}
          className="FormRoot"
        >

          <Form.Field className="FormField" name="url">
            <div>
              <Form.Label className="FormLabel">Enter a URL</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a URL
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid URL
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="url" required disabled={isLoading || isLoaded} />
            </Form.Control>


          </Form.Field>
          <Flex style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            gap: "1rem"
          }}>
            <Form.Submit asChild>
              <button className="Button" style={{ marginTop: 10 }} disabled={isLoading || isLoaded}>
                Scan
              </button>
            </Form.Submit>
            <button className="Button" disabled={!(isLoading || isLoaded)} onClick={reset}>Reset</button>
          </Flex>
        </Form.Root>

      </Box>
      <Flex className='results'>
        <Box className='column'>
          {axeIncompleteResults.map((item: AxeResult, index) => (<Card>
            <Flex gap="3" align="center" key={index} className='result'>
              <Box >
                <Badge color="green">Axe-Core</Badge>
                <Badge color={item.impact == 'serious' ? 'red' : 'blue'}>{item.impact}</Badge>
                <Avatar radius="full" fallback={item.nodes.length}></Avatar>
                <Text as="div" size="2" weight="bold">
                  {item.id}
                </Text>
                <Text as="div" size="2" color="gray">
                  {item.description}
                </Text>

                <Collapsible.Root>
                  <Collapsible.Trigger>
                    <Text>
                      View {item.nodes.length} Occurrences
                    </Text>
                  </Collapsible.Trigger>
                  <Collapsible.Content className="CollapsibleContent">
                    {item.nodes.map((axenode: AxeNode, i) => (
                      <div className='axe-node' key={i}>
                        <Text as="div" size="2" color="gray">{axenode.failureSummary}</Text>
                        <Code>{axenode.html}</Code>
                      </div>
                    ))}
                  </Collapsible.Content>
                </Collapsible.Root>
              </Box>
            </Flex>
          </Card>
          )
          )}
          {axeViolationsResults.map((item: AxeResult, index) => (<Card>
            <Flex gap="3" align="center" key={index} className='result'>
              <Box >
                <Badge color="green">Axe-Core</Badge>
                <Badge>{item.impact}</Badge>
                <Avatar radius="full" fallback={item.nodes.length}></Avatar>
                <Text as="div" size="2" weight="bold">
                  {item.id}
                </Text>
                <Text as="div" size="2" color="gray">
                  {item.description}
                </Text>
                <Collapsible.Root>
                  <Collapsible.Trigger>
                    <Text>
                      View {item.nodes.length} Occurrences
                    </Text>
                  </Collapsible.Trigger>
                  <Collapsible.Content className="CollapsibleContent">
                    {item.nodes.map((axenode: AxeNode, i) => (
                      <div className='axe-node' key={i}>
                        <Text as="div" size="2" color="gray">{axenode.failureSummary}</Text>
                        <Code>{axenode.html}</Code>
                      </div>
                    ))}
                  </Collapsible.Content>
                </Collapsible.Root>
              </Box>
            </Flex>
          </Card>
          )
          )}
        </Box>
        <Box className='column'>
          {editoria11yResults.map((item: Editoria11yResult, index) => (<Card>
            <Flex gap="3" align="center" key={index} className='result'>
              <Box >
                <Badge color='red'>Editoria11y</Badge>
                <Text as="div" size="2" weight="bold">
                  {item.test}
                </Text>
                <Text as="div" size="2" color="gray">
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </Text>
                <Code>
                  {item.node}
                </Code>
              </Box>
            </Flex>
          </Card>
          )
          )}
        </Box>
      </Flex>
    </>
  )
}

export default App
