// Import necessary Chakra UI components
import { Box, Container, Heading, Image, Text, VStack, Flex, Center, Square, AbsoluteCenter } from "@chakra-ui/react";

// Create the ArticleBlog component
const ArticleBlog = ({ title, imageUrl, paragraphText }) => {
  return (
    <Container maxW="container.xl">
      {/* Blog Post */}
      <Box mt="8">
        {/* Article Image */}
        <Image src="https://blog.1password.com/posts/2019/mental-health-week/header.png" alt={title} mb="4" />
        <Heading as="h1" size="2xl" mb="4">
          Nurturing Minds: A Journey to Mental Wellness
        </Heading>
        {/* Article Paragraph Text */}
        <Text fontSize="lg">
          In our fast-paced and demanding world, taking care of our mental health is more crucial than ever. Mental well-being is not merely the absence of mental illnesses; it encompasses our emotional, psychological, and social health. In
          this article, we embark on a journey to explore the importance of mental health and discover practical strategies to nurture our minds.
          <br />
          <Text fontSize="2xl" as="b">
            Understanding Mental Health
          </Text>
          <br />
          Mental health is a dynamic and multifaceted aspect of our overall well-being. It involves emotional resilience, effective coping mechanisms, and the ability to navigate life's challenges with a positive mindset. Acknowledging the
          significance of mental health is the first step towards creating a life that is fulfilling and balanced.
          <br />
          <Text fontSize="2xl" as="b">
            Breaking the Stigma
          </Text>
          <br />
          Despite the growing awareness surrounding mental health, societal stigma persists. It's crucial to recognize that seeking help for mental health concerns is a sign of strength, not weakness. By fostering open conversations and
          dispelling myths, we can create a supportive environment that encourages individuals to prioritize their mental well-being.
          <br />
          <Text fontSize="2xl" as="b">
            Practical Strategies for Mental Wellness
          </Text>
          <br />
          Mindfulness and Meditation : Incorporating mindfulness practices into daily life can help manage stress and enhance overall well-being. Taking a few moments each day to focus on the present can have profound effects on mental
          clarity and emotional resilience.
          <br />
          Healthy Lifestyle Choices : Physical and mental health are interconnected. Regular exercise, balanced nutrition, and sufficient sleep contribute to a positive mental state. Establishing healthy habits can significantly impact mood
          and cognitive function.
          <br />
          Social Connection : Building and maintaining meaningful relationships is essential for mental health. Whether through family, friends, or support groups, fostering social connections provides emotional support during challenging
          times.
          <br />
          Professional Support: Seeking the guidance of mental health professionals, such as therapists or counselors, is a proactive step towards managing mental health. These experts can offer valuable insights, coping strategies, and a
          safe space for self-expression.
          <br />
          <Text fontSize="2xl" as="b">
            Conclusion
          </Text>
          <br />
          Prioritizing mental health is an ongoing journey that requires intentional effort and self-compassion. By understanding the complexities of mental well-being, breaking down societal stigmas, and implementing practical strategies,
          we pave the way for a life that is not only mentally healthy but also fulfilling and resilient in the face of life's inevitable challenges. Let's embark on this journey together, fostering a culture that values and prioritizes the
          well-being of every mind.
        </Text>
      </Box>
    </Container>
  );
};

export default ArticleBlog;
