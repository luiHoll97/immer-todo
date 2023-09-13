import Todo from "./Todo";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from "@chakra-ui/react";
import Archives from "./Archives";

const Home = () => {
  return (
    <>
    <Heading size={'3xl'} fontFamily={'mono'} m={5}> immer-todo</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Active</Tab>
          <Tab>Archive</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Todo />
          </TabPanel>
          <TabPanel>
            <Archives />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Home;
