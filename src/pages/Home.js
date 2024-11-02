import BannerHome from "../components/BannerHome";

import { useSelector } from "react-redux";
import HorizontalCard from "../components/HorizontalScrollCard";

import useFetch from "../hooks/useFetch";
function Home() {
  const trendingData = useSelector((state) => state.moveioData.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/tv/popular");
  const { data: onTheAirShowData } = useFetch("/tv/on_the_air");
  return (
    <div>
      <BannerHome />
      <HorizontalCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      ></HorizontalCard>
      <HorizontalCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      ></HorizontalCard>
      <HorizontalCard
        data={topRatedData}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
      <HorizontalCard
        data={popularTvShowData}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizontalCard
        data={onTheAirShowData}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
}

export default Home;
