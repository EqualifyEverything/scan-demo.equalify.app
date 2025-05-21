//import { useState } from 'react'
import { AlertDialog, Avatar, Badge, Box, Button, Card, Code, Container, Flex, Heading, Strong, Table, Text } from '@radix-ui/themes'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Collapsible, Form } from "radix-ui";
import { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import EqualifyLogo from './assets/equalify.svg'
import UICLogo from './assets/uic.svg'
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

type PDFResultRule = {
  Rule: string;
  Status: string;
  Description: string;
}

type PDFResult = {
  "Alternate Text": PDFResultRule[];
  "Document": PDFResultRule[]
  "Forms": PDFResultRule[]
  "Headings": PDFResultRule[]
  "Lists": PDFResultRule[]
  "Page Content": PDFResultRule[]
  "Tables": PDFResultRule[];
}

function App() {
  const queryClient = useQueryClient()
  const [url, setUrl] = useState("");
  const [axeIncompleteResults, setAxeIncompleteResults] = useState<AxeResult[]>([]);
  const [axeViolationsResults, setAxeViolationsResults] = useState<AxeResult[]>([]);
  const [editoria11yResults, setEditoria11yResults] = useState<Editoria11yResult[]>([]);
  const [PdfResults, setPdfResults] = useState<PDFResult>(new Object as PDFResult);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

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
        throw new Error('Network response for sendURL was not ok')
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
        throw new Error('Network response for getScanResults was not ok')
      }

      const result = await response.json();
      console.log(result);

      if (result.status == 'delayed' || result.status == 'active' || result.status == 'waiting') {
        console.log("Scan status: " + result.status + ", retrying...");
        queryClient.invalidateQueries({ queryKey: ['getScanResults'] });
        return await response.json();
      }
      if (result.status == 'completed') {
        console.log("Scan complete!");
        setIsLoading(false);
        setIsLoaded(true);
        if (result.result.results) setAxeIncompleteResults(result.result.results.incomplete);
        if (result.result.results) setAxeViolationsResults(result.result.results.violations);
        if (result.result.editoria11yResults) setEditoria11yResults(result.result.editoria11yResults);
        if (result.result.PDFresults["Detailed Report"]) setPdfResults(result.result.PDFresults["Detailed Report"]);
        console.log("PDF Results:");
        console.log(result.result.PDFresults);
        return await response.json();
      }
      if (result.status == 'failed') {
        console.log("Scan Failed!");
        setAlertDialogOpen(true);
        return await response.json();
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
      <AlertDialog.Root open={alertDialogOpen}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Scan Failed</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Sorry, there was a problem scanning <a href={url}>{url}</a>. Please ensure the page is valid and try again!
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Action onClick={() => { window.location.reload(); }}>
              <Button variant="solid" color="red">
                OK
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <Box width={{ initial: '60vw' }} className='main'>
        <Flex align="center" justify="center" className='logos' gap="1rem">
          <img src={UICLogo} className='uic-logo' />
          <img src={EqualifyLogo} className='equalify-logo' />
        </Flex>
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
              <Form.Label className="FormLabel">Enter a URL to Scan:</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a URL!
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                That URL appears to be invalid!
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
      <Container>
        <Box>
        { PdfResults.Document ? (
          <Box p="1rem">
          <Heading size="5" align="center">PDF Scan Results</Heading>
          </Box>
        ): (<></>)}
        
          {PdfResults && Object.entries(PdfResults).map(([key, result]) => (
            <Card mb="1rem">
              <Box key={key} className='result'>
                <Box p="1rem">
                  <Heading size="4" align="center">{key}</Heading>
                </Box>
                <Table.Root>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {result.map((item, index) => (
                      <Table.Row key={index}>
                        <Table.RowHeaderCell>
                          <Text size="3"><Strong>{item.Rule}</Strong></Text>
                          <Text size="2" as="div">{item.Description}</Text>
                        </Table.RowHeaderCell>
                        <Table.Cell>
                          <Badge color={item.Status == 'Failed' ? 'red' : 'blue'}>{item.Status}</Badge>
                        </Table.Cell>
                      </Table.Row>

                    ))}
                  </Table.Body>
                </Table.Root>

              </Box>
            </Card>

          ))}
        </Box>
      </Container>
    </>
  )
}

export default App
