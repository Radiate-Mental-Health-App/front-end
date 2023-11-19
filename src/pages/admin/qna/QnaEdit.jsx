import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function QnaCreate() {
  const navigate = useNavigate();
  const [Questions, setQuestions] = useState("");
  const [Answers, setAnswers] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getQnaById();
  }, []);
  const getQnaById = async () => {
    const qnas = await axios.get(`http://localhost:5000/api/qna/getQna/${id}`);
    setQuestions(qnas.data.Questions);
    setAnswers(qnas.data.Answers);
  };

  const onQuestionsChanged = (e) => setQuestions(e.target.value);
  const onAnswersChanged = (e) => setAnswers(e.target.value);

  const onSavedQnAClicked = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/qna/updateQna/${id}`, {
        Questions,
        Answers,
      });
      navigate("/a/qna");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="form" onSubmit={onSavedQnAClicked}>
      <Box p="24px">
        <Stack>
        <Heading size="lg" mb={2}>
          {" "}
          Edit Data QNA{" "}
        </Heading>

          <Box 
              className="edit"
              bg="white"
              borderWidth="1px"
              borderRadius="lg"
              p="6">
            <Stack spacing={4}>
              <Box>
                <Text color="gray.400" fontWeight="semibold">
                  {" "}
                  Questions{" "}
                </Text>
                  <Input
                    size="md"
                    variant="outline"
                    value={Questions}
                    onChange={onQuestionsChanged}
                  />
              </Box>

              <Box>
                <Text mb={1} color="gray.400" fontWeight="semibold">
                  {" "}
                  Answers{" "}
                </Text>
                  <Textarea
                    size="md"
                    variant="outline"
                    height="200px"
                    value={Answers}
                    onChange={onAnswersChanged}
                  />
              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" bg='#FFAC31' color='white'>
                  Save
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </form>
  );
}

export default QnaCreate;