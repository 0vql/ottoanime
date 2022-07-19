import {
  AiFillHeart,
  AiFillCalendar,
  AiFillPlayCircle,
  AiFillStar,
  AiTwotoneThunderbolt,
} from "react-icons/ai";
import { FaEye, FaDonate } from "react-icons/fa";

export const Discover = [
  {
    index: 1,
    name: "Recently Added",
    link: "/recentlyadded/1",
    icon: AiFillCalendar,
  },
  {
    index: 0,
    name: "Popular",
    link: "/popular/1",
    icon: AiFillStar,
  },
  {
    index: 2,
    name: "New Season",
    link: "/newseason/1",
    icon: AiTwotoneThunderbolt,
  },
  {
    index: 3,
    name: "Movies",
    link: "/movies/1",
    icon: AiTwotoneThunderbolt,
  },
  {
    index: 4,
    name: "Recently Watched",
    link: "/recentlyWatched/",
    icon: FaEye,
  },
  {
    index: 5,
    name: "My List",
    link: "/myList",
    icon: AiFillHeart,
  },
  



];

const genrelist = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Dub",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
  "Yaoi",
  "Yuri",
];
export var Genre = genrelist.map((name, index) => ({
  index: index,
  name: name,
  link: `/genre/${name.split(" ").join("-")}/1`,
  icon: AiFillPlayCircle,
}));
