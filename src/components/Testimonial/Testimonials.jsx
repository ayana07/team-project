import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Testimonials.css";

const Testimonials = () => {
	return (
		<div className="testimonial">
			<h2>Testimonials</h2>
			<p>
				Everybody says: " I don’t need another running shoe. I need what’s next.
				Thanks, @nikerunning"
			</p>
			<ImageList
				className="img-list"
				sx={{
					width: 1300,
					height: 1250,
					marginLeft: 50,

					paddingBottom: 10,
				}}
			>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={item.img}
							// srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							// alt={item.title}
							// loading="lazy"
						/>
						<ImageListItemBar
							title={item.title}
							subtitle={<span>by: {item.author}</span>}
							position="below"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};

const itemData = [
	{
		img: "https://images.squarespace-cdn.com/content/v1/509705fee4b09e893827ffa4/1478511186760-Z91NKC8MAGNAO444WBL9/HO16_FB_CR7Discovery_Action_Long_Sleeve_5630_v13_crop_3x2_native_1600.jpg?format=2500w",
		title: "Ronaldo",
		author: "@cristiano",
	},
	{
		img: "https://freight.cargo.site/t/original/i/53dcd0a8361cd25457b07c6571d5c0780a9fa268a64f3296fac83843ff64746d/LDN12_FEDERATION_RN_AFELIX_DIGITAL-WINDOW_USATF_ACTION_04_3000.jpg",
		title: "Allyson",
		author: "@allysonfelix",
	},
	{
		img: "https://www.gannett-cdn.com/presto/2019/01/15/USAT/8eac2634-70a2-4dd8-ac74-bc3add1d5752-AFP_AFP_1C886A.JPG",
		title: "Serena",
		author: "@serenawilliams",
	},
	{
		img: "https://www.hypefresh.co/wp-content/uploads/2020/03/bzumbmxarxq0suknsm61_o7g156.jpg",
		title: "Lebron James",
		author: "@lebron",
	},
	{
		img: "https://s3.amazonaws.com/nikeinc/assets/54331/FY16_INNO_RN_AEROSWIFT_MARATHON_MOFARAH_DYNAMIC_rectangle_1600.jpg?1458113049",
		title: "Mo Farah",
		author: "@gomofarah",
	},
	{
		img: "http://farm8.staticflickr.com/7003/6715312831_3a4feff152_z.jpg",
		title: "Maria Sharapova",
		author: "@mariasharapova",
	},
	{
		img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2016%2F08%2Folympics-simone-biles-nike-beyonce-jealous-commercial-0.jpg?w=960&cbr=1&q=90&fit=max",
		title: "Simona Biles",
		author: "@simonabiles",
	},
	{
		img: "https://www.tennisworldusa.org/imgb/45514/roger-federer-the-18th-grand-slam-was-the-most-surprising-one-for-me-.jpg",
		title: "Roger Federer",
		author: "@rogerfederer",
	},
	{
		img: "https://i.pinimg.com/736x/8c/2f/db/8c2fdb0643d7d45e3e30d0373b8c894c.jpg",
		title: "Neymar",
		author: "@neymarjr",
	},
	{
		img: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/9e3ef2e0-0910-4509-a84a-90c365826427/naomi-osaka.jpg",
		title: "Naomi Osaka",
		author: "@naomiosaka",
	},
	{
		img: "https://yesassets.s3.amazonaws.com/map/cache/map-26745-w808.jpg",
		title: "Alex Morgan",
		author: "@alexmorgan",
	},
	{
		img: "https://icdn.psgtalk.com/wp-content/uploads/2019/12/Kylian-Mbappe-Bondy-Dreams-Collection-2019.jpg",
		title: "Kylian Mbappe",
		author: "@k.mbappe",
	},
];

export default Testimonials;
