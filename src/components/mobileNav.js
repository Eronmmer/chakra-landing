import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import Container from "./container";

const MobileNav = ({ removeNavbarHandler, mobileNavOpen }) => {
	return (
		<Box
			position="fixed"
			zIndex="10"
			top="0"
			left="0"
			height="100vh"
			width="100%"
			backgroundColor="brand.white"
			d={mobileNavOpen ? "block" : "none"}
		>
			<Container>
				<Flex mb="3rem" justify="space-between" align="center" mt={6}>
					<Link
						href="#!"
						_hover={{ textDecoration: "none" }}
						position="relative"
					>
						<Image
							_hover={{ transform: "scale(1.1)" }}
							transition=".3s ease-out"
							alt="Logo"
							src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/brand_logo.png"
						/>
					</Link>
					<Box
						position="relative"
						onClick={removeNavbarHandler}
						cursor="pointer"
						d={{ base: "block", md: "none" }}
					>
						<Box
							position="absolute"
							transform="rotate(45deg)"
							w={8}
							h="3px"
							backgroundColor="brand.black"
							mb={2}
						/>
						<Box
							transform="rotate(135deg)"
							w={8}
							h="3px"
							backgroundColor="brand.black"
							mb={2}
						/>
					</Box>
				</Flex>

				<Flex
					fontFamily="inter"
					alignItems="center"
					justifyContent="space-between"
					flexDir="column"
					height="60vh"
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
			</Container>
		</Box>
	);
};

export default MobileNav;
