import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Textarea
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAddDataQNAMutation } from "../../../state/api";

function QnaCreate() {
  const [addNewData, { isSuccess }] = useAddDataQNAMutation();
  const navigate = useNavigate();
  const [Questions, setQuestions] = useState("");
  const [Answers, setAnswers] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setQuestions("");
      setAnswers("");
      navigate("/a/qna");
      window.location.reload();
    }
  }, [isSuccess, navigate]);

  const onQuestionsChanged = (e) => setQuestions(e.target.value);
  const onAnswersChanged = (e) => setAnswers(e.target.value);

  const onSavedQnAClicked = async (e) => {
    e.preventDefault();
    addNewData({ Questions, Answers });
  };
  return (
    <form className="form" onSubmit={onSavedQnAClicked}>
      <Box p="24px">
        <Stack>
        <Heading size="lg" mb={2}>
          {" "}
          Add Data QNA{" "}
        </Heading>

          <Box
            className="add"
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
                    isRequired
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
                    value={Answers}
                    onChange={onAnswersChanged}
                  />
              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" bg='#FFAC31' color='white'>
                  Add QNA
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