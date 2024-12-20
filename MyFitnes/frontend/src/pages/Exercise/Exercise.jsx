import React, { useState } from "react";
import { Box, Flex, Input, Text, Button, VStack } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Headertop from "../../components/Headertop";
import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI("AIzaSyBocrfpi0ezYv51OfVwnBvGtrWxlzA_y6Y");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Exercise = () => {
  const [todayDate, setTodayDate] = useState("");
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let date = today.toDateString();

  // Chatbot related state
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm Fitness! AI. How can I assist you today?" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [history, setHistory] = useState([]);

  // Get AI response dynamically
  const getResponse = async (prompt) => {
    try {
      const chat = await model.startChat({ history });
      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error with Gemini AI:", error);
      return "Sorry, something went wrong. Please try again.";
    }
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const updatedMessages = [
      ...messages,
      { sender: "user", text: userMessage },
    ];
    setMessages(updatedMessages);

    // Get AI response
    const aiResponse = await getResponse(userMessage);
    setMessages([...updatedMessages, { sender: "bot", text: aiResponse }]);

    // Update chat history
    setHistory([
      ...history,
      { role: "user", parts: userMessage },
      { role: "model", parts: aiResponse },
    ]);

    setUserMessage("");
  };

  // Render chat messages
  const renderMessages = () =>
    messages.map((msg, index) => (
      <Flex
        key={index}
        justify={msg.sender === "user" ? "flex-end" : "flex-start"}
        my={2}
      >
        <Box
          bg={msg.sender === "user" ? "blue.500" : "gray.200"}
          color={msg.sender === "user" ? "white" : "black"}
          p={3}
          borderRadius="md"
          maxW="70%"
        >
          {/* Render Markdown safely */}
          <Text
            dangerouslySetInnerHTML={{
              __html: md().render(msg.text), // Convert Markdown to HTML
            }}
          />
        </Box>
      </Flex>
    ));

  const handleTomorrowDate = () => {
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    date = tomorrow.toDateString();
  };

  return (
    <>
      <Headertop />
      <Header />
      <Box bg="gray.50" py={4}>
        <img
          src="https://julmsejung.com/web-banner/images/horizontal.png"
          alt="Banner"
          className="add1"
          style={{
            width: "100%",
            maxHeight: "200px",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />
        <Box
          maxW="1200px"
          mx="auto"
          px={4}
          py={4}
          boxShadow="lg"
          bg="white"
          borderRadius="md"
        >
          <Flex alignItems="center" justify="space-between" gap={4}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="#746186">
                Your Food Diary For:
              </Text>
            </Box>
            <Flex justify="space-between" alignItems="center" w="70%">
              <Box
                p={2}
                w="10%"
                textAlign="center"
                color="white"
                backgroundColor="#00548f"
                borderRadius="md"
                cursor="pointer"
              >
                <i className="fa-solid fa-caret-left"></i>
              </Box>
              <Box
                p={2}
                w="70%"
                textAlign="center"
                color="white"
                backgroundColor="#00548f"
                borderRadius="md"
              >
                {date}
              </Box>
              <Box
                p={2}
                w="10%"
                textAlign="center"
                onClick={handleTomorrowDate}
                color="white"
                backgroundColor="#00548f"
                borderRadius="md"
                cursor="pointer"
              >
                <i className="fa-solid fa-caret-right"></i>
              </Box>
            </Flex>
          </Flex>

          {/* Chatbot */}
          <Box
            border="1px solid #ccc"
            borderRadius="md"
            mt={6}
            w="100%"
            maxW="600px"
            mx="auto"
            p={4}
            bg="white"
            boxShadow="lg"
          >
            <Flex direction="column" align="center">
              <VStack
                spacing={3}
                align="stretch"
                overflowY="auto"
                h="300px"
                p={2}
                bg="gray.50"
                borderRadius="md"
              >
                {renderMessages()}
              </VStack>
              <Flex mt={4}>
                <Input
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} colorScheme="blue" ml={2}>
                  Send
                </Button>
              </Flex>
            </Flex>
          </Box>

          {/* Exercise Notes */}
          <Box mt={8}>
            <Text fontSize="lg" fontWeight="bold">
              Today's Exercise Notes
            </Text>
            <Input
              mt={4}
              placeholder="Add your exercise notes here..."
              size="md"
              bg="gray.100"
            />
          </Box>
        </Box>
        <img
          src="https://julmsejung.com/web-banner/images/horizontal.png"
          alt="Advertisement"
          className="add2"
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            marginTop: "20px",
          }}
        />
      </Box>
      <Footer />
    </>
  );
};

export default Exercise;
