import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import PageBar from './Components/PageBar';
import SideBar from './Components/SideBar';
import Content from './Components/Content';
import {getCatsData, changeLimit, resetLimit} from './redux/CatSlice';

function MainPage() {
    console.log('count');
  const dispatch = useDispatch();
  
  const {
    limit,
    catImages,
  } = useSelector((state) => state.cat);

  const [open, setOpen] = useState(false);
  const [category_ids, setCategory] = useState();

  useEffect(() => {
    dispatch(getCatsData({limit, category_ids}))
  }, [limit, category_ids]);

  function openSide () {
    setOpen(!open);
  };
  function getMore () {
    dispatch(changeLimit());
  };
  const categories = [
    {"id":5,"name":"boxes"},
    {"id":15,"name":"clothes"},
    {"id":1,"name":"hats"},
    {"id":14,"name":"sinks"},
    {"id":2,"name":"space"},
    {"id":4,"name":"sunglasses"},
    {"id":7,"name":"ties"}]
  function getCategoryId (id) {
    category_ids !== id && setCategory(id);
    category_ids !== id && dispatch(resetLimit());
    console.log(id)
    setOpen(!open);
  };
  
  return (
    <div>
        <PageBar openSide = {openSide} />
        {open && <SideBar categories = {categories} open = {open} getCategoryId = {getCategoryId} />}
        <Content catImages = {catImages} getMore = {getMore}/>
    </div>
  );
}

export default MainPage;
