import { Box, Text, Image, Heading, Flex } from "@chakra-ui/react";
import Container from "../components/container";
import Button from "../components/button";

const sectionFour = () => {
	return (
		<Box mb={["5rem", "7rem", "10rem", "12rem"]} as="section">
			<Container>
				<Flex
					flexDir={{ base: "column", md: "row" }}
					align="center"
					justify="space-between"
				>
					<Box mb={{ base: "3rem", md: 0 }} flexBasis="40%">
						<Box ml="2rem">
							<Image
								mr="auto"
								width="1rem"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_circle.svg"
							/>
						</Box>
						<Heading mt="2rem" mb="1.5rem" size="xl" as="h2">
							Guides by Thousand <Box as="br" /> Sunny
						</Heading>
						<Text
							maxWidth={{ base: "auto", md: "430px" }}
							color="brand.greyText"
							mb="1rem"
						>
							Packed with tips and advice from our on-the-ground experts, our
							city guides app (iOS and Android) is the ultimate resource before
							and during a trip.
						</Text>
						<Button mt="1.5rem" py="1rem">
							Download
						</Button>
					</Box>
					<Box flexBasis="48%">
						<Image
							width={{ base: "100%", sm: "60%", lg: "100%" }}
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/fourth_section.png"
						/>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default sectionFour;
