//import { useState } from 'react'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Form } from "radix-ui";
import { useState } from 'react';
//import { test } from './data/test';

type AxeResult = {
  description: string;
  help: string;
  helpUrl: string;
  id: string;
  impact: string;
  nodes: object[];
  tags: string[];
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


  // Send to scan
  const { data: sendResponse } = useQuery({
    queryKey: ['sendURL'],
    queryFn: async () => {
      const response = await fetch('api/generate/url', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": url })
      })
      if (!response.ok) {
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
        setAxeIncompleteResults(result.result.results.incomplete);
        setAxeViolationsResults(result.result.results.violations);
        setEditoria11yResults(result.result.editoria11yResults);
      }
      return await response.json()
    },
    enabled: !!jobId,
  });





  return (
    <>
      <Box width={{ initial: '60vw' }}>
        <Form.Root
          onSubmit={(event) => {
            const formData = new FormData(event.currentTarget);
            setUrl(formData.get("url") as string);
            event.preventDefault();
          }}
          className="FormRoot"
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}>

          <Form.Field className="FormField" name="url">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">URL</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a URL
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Please provide a valid URL
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="url" required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }}>
              Scan
            </button>
          </Form.Submit>
        </Form.Root>

      </Box>
      <Box>
        {axeIncompleteResults.map((item: AxeResult, index) => (<Card>
          <Flex gap="3" align="center" key={index}>
            <Box>
              <Text as="div" size="2" weight="bold">
                {item.id}
              </Text>
              <Text as="div" size="2" color="gray">
                {item.description}
              </Text>
              <Text>
                {item.impact}
              </Text>
              <Text>
                Occurances: {item.nodes.length}
              </Text>
            </Box>
          </Flex>
        </Card>
        )
        )}
        {axeViolationsResults.map((item: AxeResult, index) => (<Card>
          <Flex gap="3" align="center" key={index}>
            <Box>
              <Text as="div" size="2" weight="bold">
                {item.id}
              </Text>
              <Text as="div" size="2" color="gray">
                {item.description}
              </Text>
              <Text>
                {item.impact}
              </Text>
              <Text>
                Occurances: {item.nodes.length}
              </Text>
            </Box>
          </Flex>
        </Card>
        )
        )}
        {editoria11yResults.map((item: Editoria11yResult, index) => (<Card>
          <Flex gap="3" align="center" key={index}>
            <Box>
              <Text as="div" size="2" weight="bold">
                {item.test}
              </Text>
              <Text as="div" size="2" color="gray">
                {item.content}
              </Text>
              <Text>
                {item.node}
              </Text>
            </Box>
          </Flex>
        </Card>
        )
        )}
      </Box>
    </>
  )
}

export default App
