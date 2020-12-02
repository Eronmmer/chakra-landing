import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import Container from "../components/container";

const sectionFive = () => {
	return (
		<Box mb={["5rem", "7rem", "8rem", "10rem"]} as="section">
			<Container position="relative">
				<Box position="absolute" bottom="50%" left="-5%">
					<Image
						mr="auto"
						width="1rem"
						src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_circle.svg"
					/>
				</Box>
				<Heading mb="3rem" as="h3" size="xl">
					Testimonials
				</Heading>
				<Flex
					flexDir={{ base: "column", md: "row" }}
					justify="space-between"
					align="center"
				>
					<Box mb={{ base: "3rem", md: 0 }} flexBasis="35%">
						<Flex
							width={{ base: "20%", md: "50%" }}
							mb="1.5rem"
							justify="space-between"
							align="center"
						>
							{new Array(5).fill("_").map((_, i) => (
								<Image
									width="10%"
									key={i}
									src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/star.svg"
								/>
							))}
						</Flex>
						<Text fontSize="lg" mb="2rem">
							“Quisque in lacus a urna fermentum euismod. Integer mi nibh,
							dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
							amet turpis nec”
						</Text>
						<Text fontSize="lg" fontWeight="bold">
							Edward Newgate
						</Text>
						<Text color="rgba(0, 0, 0, 0.85)">Founder Circle</Text>
					</Box>
					<Box width={{ base: "100%", md: "inherit" }}>
						<Box w={{ base: "100%" }}>
							<Box
								position="relative"
								maxWidth="75%"
								ml={{ base: 0, md: "auto" }}
							>
								<Image
									top="-1rem"
									right="-1rem"
									position="absolute"
									src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_circle.svg"
									transform="scale(0.8)"
								/>
								<Image
									borderRadius="10px"
									src="https://res.cloudinary.com/djksghat4/image/upload/v1606868553/chakra/testimonial_1.png"
								/>
								<Image
									bottom="-1rem"
									left="-1rem"
									position="absolute"
									src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_plus.svg"
									transform="scale(0.8)"
								/>
								<Box position="absolute" backgroundColor="brand.white" />
							</Box>
						</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default sectionFive;
