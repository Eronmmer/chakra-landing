import {
	Box,
	Text,
	Image,
	Heading,
	Flex,
	Grid,
	Link as ChakraLink,
} from "@chakra-ui/react";
import Container from "../components/container";

const TrendingCards = (props) => {
	const { picture, title, summary } = props;
	return (
		<Box flex="1">
			<Box position="relative">
				<Image
					mb="1rem"
					borderTopRightRadius="10px"
					borderTopLeftRadius="10px"
					src={picture}
					maxH="14rem"
					width="fit-content"
				/>
			</Box>
			<Text width="90%" fontWeight="bold" mb="1rem" fontFamily="inter">
				{title}
			</Text>
			<Text
				width="90%"
				fontSize="sm"
				color="brand.greyText"
				mb="1.2rem"
				fontFamily="inter"
			>
				{summary}
			</Text>
			<ChakraLink
				href="#!"
				_hover={{ textDecor: "none" }}
				cursor="pointer"
				fontWeight="bold"
				color="brand.orange"
			>
				Read more
			</ChakraLink>
		</Box>
	);
};

const sectionSix = () => {
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
				<Box mb="4rem">
					<Image
						mr="auto"
						ml="20rem"
						width="1rem"
						src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_plus.svg"
					/>
				</Box>
				<Flex mb="2.4rem" justify="space-between" align="center">
					<Heading>Trending stories</Heading>
					<Flex cursor="pointer" justify="space-around" align="center">
						<Text mr="5px" fontFamily="Inter" color="brand.orange">
							View all
						</Text>
						<Image src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/arrow_right.svg" />
					</Flex>
				</Flex>
				<Grid
					gridTemplateColumns={{
						base: "1fr",
						md: "1fr 1fr",
						lg: "repeat(4, 1fr)",
					}}
					gridTemplateRows={{
						lg: "1fr",
						md: "1fr 1fr",
						base: "repeat(4, 1fr)",
					}}
					gridColumnGap="1.5rem"
					gridRowGap="1.5rem"
					justify="space-between"
				>
					<TrendingCards
						picture="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/trending_one.png"
						title="The many benefits of taking a healthy holiday"
						summary="Healthy holidays are on the rise 
to help maximize your health and happiness..."
					/>
					<TrendingCards
						picture="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/trending_two.png"
						title="The best Kyto restaurant to try Japanese food"
						summary="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
to visit..."
					/>
					<TrendingCards
						picture="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/trending_three.png"
						title="Skip Chicken Itza and head to this remote Yucatan"
						summary="It’s remote and challenging to get,
but braving the jungle and exploring
these ruins without the..."
					/>
					<TrendingCards
						picture="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/trending_four.png"
						title="Surfs up these beginner spots around the world"
						summary="If learning to surf has in on your to-
do list for a while, the good news
is: it’s never too late..."
					/>
				</Grid>

				<Box mt="5rem">
					<Image
						ml="auto"
						mr="20rem"
						width="1rem"
						src="https://res.cloudinary.com/djksghat4/image/upload/v1606868551/chakra/testimonial_circle.svg"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default sectionSix;
