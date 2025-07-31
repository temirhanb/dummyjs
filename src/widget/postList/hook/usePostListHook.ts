import {useDispatch, useSelector} from "react-redux";
import {type AppDispatch, type RootState} from "../../../store/store";
import {useEffect, useRef} from "react";
import {fetchPostsThunk} from "../../../store/thunks/fetchPostsThunk";
import {Grid} from "antd";

const {useBreakpoint} = Grid;

const useInfiniteScroll = (callback: any, ref: any) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, ref]);
};

export const usePostListHook = () => {
  const {posts, status, skipCount, totalPosts} = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  const screens = useBreakpoint();

  useEffect(() => {
    dispatch(fetchPostsThunk(0));
  }, []);

  const sentinelRef = useRef(null);

  const loadMore = () => {
    if (totalPosts < skipCount + 10) return;
    dispatch(fetchPostsThunk(skipCount + 10));
  };

  useInfiniteScroll(loadMore, sentinelRef);

  return {sentinelRef, posts, status, screens};
};