import { Box, Text, Image, Heading, Flex } from "@chakra-ui/react";
import Container from "../components/container";

const sectionThree = () => {
	return (
		<Box mb={["5rem", "6rem", "10rem"]} as="section">
			<Container position="relative">
				<Box position="absolute" bottom="50%" left="-5%">
					<Image
						mr="auto"
						width="1rem"
						src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_plus.svg"
					/>
				</Box>
				<Flex mb="2.4rem" justify="space-between" align="center">
					<Heading>Featured destinations</Heading>
					<Flex cursor="pointer" justify="space-around" align="center">
						<Text mr="5px" fontFamily="Inter" color="brand.orange">
							View all
						</Text>
						<Image src="https://res.cloudinary.com/djksghat4/image/upload/v1606868554/chakra/arrow_right.svg" />
					</Flex>
				</Flex>
				<Flex
					flexWrap="wrap"
					gridRowGap="2rem"
					justify="space-between"
					align="center"
				>
					<Box position="relative">
						<Image
							width="80%"
							mx="auto"
							borderRadius="10px"
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured1.png"
						/>
						<Box
							position="absolute"
							bottom="-1px"
							left="9%"
							borderTopRightRadius="10px"
							pr="1.8rem"
							pt=".7rem"
							backgroundColor="brand.white"
						>
							<Text fontWeight="bold">Raja Ampat</Text>
							<Text color="brand.greyText">Indonesia</Text>
						</Box>
					</Box>
					<Box position="relative">
						<Image
							width="80%"
							mx="auto"
							borderRadius="10px"
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured2.png"
						/>
						<Box
							position="absolute"
							bottom="-1px"
							left="9%"
							borderTopRightRadius="10px"
							pr="1.8rem"
							pt=".7rem"
							backgroundColor="brand.white"
						>
							<Text fontWeight="bold">Fanjingshan</Text>
							<Text color="brand.greyText">China</Text>
						</Box>
					</Box>
					<Box position="relative">
						<Image
							width="80%"
							mx="auto"
							borderRadius="10px"
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured3.png"
						/>
						<Box
							position="absolute"
							bottom="-1px"
							left="9%"
							borderTopRightRadius="10px"
							pr="1.8rem"
							pt=".7rem"
							backgroundColor="brand.white"
						>
							<Text fontWeight="bold">Vevy</Text>
							<Text color="brand.greyText">Switzerland</Text>
						</Box>
					</Box>
					<Box position="relative">
						<Image
							width="80%"
							mx="auto"
							borderRadius="10px"
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/featured4.png"
						/>
						<Box
							position="absolute"
							bottom="-1px"
							left="9%"
							borderTopRightRadius="10px"
							pr="1.8rem"
							pt=".7rem"
							backgroundColor="brand.white"
						>
							<Text fontWeight="bold">Skadar</Text>
							<Text color="brand.greyText">Montenegro</Text>
						</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default sectionThree;
