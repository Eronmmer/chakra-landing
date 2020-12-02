import * as React from "react";
import {
	Box,
	Image,
	Flex,
	Link,
	Heading,
	Text,
	Select,
} from "@chakra-ui/react";
import Container from "../components/container";
import Button from "../components/button";
import MobileNav from "../components/mobileNav";

const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
	const removeNavbarHandler = () => {
		setMobileNavOpen(false);
	};
	const openNavbar = () => {
		setMobileNavOpen(true);
	};
	return (
		<Box position="relative" mb={["5rem", "7rem", "10rem", "12rem"]}>
			<Container position="relative">
				<Box position="absolute" bottom="40%" left="-5%">
					<Image
						mr="auto"
						width="1rem"
						src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_circle.svg"
					/>
				</Box>
				<Flex
					mb="2rem"
					py="1.5rem"
					as="header"
					alignItems="center"
					justifyContent="space-between"
				>
					<Box flex={{ base: "1", md: "0.2", lg: "0.5", xl: "0.8" }}>
						<Link
							href="#!"
							_hover={{ textDecoration: "none" }}
							position="relative"
						>
							<Image
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
								alt="Logo"
								src="https://res.cloudinary.com/djksghat4/image/upload/v1606868554/chakra/brand_logo.png"
							/>
						</Link>
					</Box>
					<Flex
						fontFamily="inter"
						alignItems="center"
						justifyContent="space-between"
						flex="1"
						d={{ base: "none", md: "flex" }}
					>
						<Link
							color="brand.darkBlack"
							href="#!"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Home
							</Text>
						</Link>
						<Link
							color="brand.lightGrey"
							href="#!"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Destinations
							</Text>
						</Link>
						<Link
							color="brand.lightGrey"
							href="#!"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								About
							</Text>
						</Link>
						<Link
							color="brand.lightGrey"
							href="#!"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Partner
							</Text>
						</Link>
						<Link
							color="brand.orange"
							border="1px solid #FB8F1D"
							borderRadius="8px"
							px="2rem"
							py=".3rem"
							href="#!"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Login
							</Text>
						</Link>
						<Link
							backgroundColor="brand.orange"
							color="brand.white"
							borderRadius="8px"
							px="2rem"
							py=".37rem"
							href="#!"
							_hover={{ textDecoration: "none" }}
						>
							<Text
								_hover={{ transform: "scale(1.1)" }}
								transition=".3s ease-out"
							>
								Register
							</Text>
						</Link>
					</Flex>
					<Box
						onClick={openNavbar}
						cursor="pointer"
						d={{ base: "block", md: "none" }}
					>
						<Box w={8} h="3px" backgroundColor="brand.black" mb={2} />
						<Box w={8} h="3px" backgroundColor="brand.black" mb={2} />
						<Box w={8} h="3px" backgroundColor="brand.black" mb={2} />
					</Box>
				</Flex>

				<Flex flexDir={{ base: "column", md: "row" }} justify="space-between">
					<Box flex="1">
						<Heading mt={{ base: 0, md: "2rem" }} size="2xl" as="h1">
							Explore and <Box as="br" /> Travel
						</Heading>
						<Box mt="3rem">
							<Text
								fontFamily="inter"
								fontWeight="bold"
								color="brand.darkBlack"
							>
								Holiday finder
							</Text>
							<Box
								mt=".6rem"
								backgroundColor="brand.darkBlack"
								width="1.8rem"
								height="2px"
								borderRadius="4px"
							/>

							<Box width="80%" mt="2rem" as="form">
								<Flex mb="1.5rem">
									<Select mr=".6rem" placeholder="Location">
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
									<Select placeholder="Activity">
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
								</Flex>
								<Flex>
									<Select mr=".6rem" placeholder="Grade">
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
									<Select placeholder="Date">
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
								</Flex>

								<Button mt="1.5rem">Explore</Button>
							</Box>
						</Box>
					</Box>
					<Box mt={{ base: "3.5rem", md: 0 }} flex="1">
						<Image
							width={{ base: "100%", sm: "60%", lg: "100%" }}
							alt="Travel"
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868550/chakra/hero_image.png"
						/>
					</Box>
				</Flex>
			</Container>
			<MobileNav
				mobileNavOpen={mobileNavOpen}
				removeNavbarHandler={removeNavbarHandler}
			/>
		</Box>
	);
};

export default Header;
