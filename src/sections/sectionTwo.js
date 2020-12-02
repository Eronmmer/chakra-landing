import { Box, Text, Image, Heading, Flex } from "@chakra-ui/react";
import Container from "../components/container";
import Button from "../components/button";

const sectionTwo = () => {
	return (
		<Box mb={["5rem", "7rem", "10rem", "12rem"]} as="section">
			<Container>
				<Flex
					flexDir={{ base: "column-reverse", md: "row" }}
					align="center"
					justify="space-between"
				>
					<Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
						<Image
							width={{ base: "100%", sm: "60%", lg: "100%" }}
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868552/chakra/second_section.png"
						/>
					</Box>
					<Box flexBasis="40%">
						<Heading mb="1.5rem" size="xl" as="h2">
							A new way to explore the world
						</Heading>
						<Text
							maxWidth={{ base: "auto", md: "430px" }}
							color="brand.greyText"
							mb="1rem"
						>
							For decades travellers have reached for Lonely Planet books when
							looking to plan and execute their perfect trip, but now, they can
							also let Lonely Planet Experiences lead the way
						</Text>
						<Button mt="1.5rem" py="1rem">
							Learn more
						</Button>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default sectionTwo;
