import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";

import Comments from "../components/comments";
import AnimatedPage from "../components/animatedPage";
import PathContainer from "../components/pathContainer";
import SliderWrapper from "./../components/sliderWrapper";
import SingleEventEvents from "../components/singleEventEvents";

// Icons
import InProgressIcon from "./../assets/icons/in-progress.svg";
import CheckIcon from "./../assets/icons/check-outline.svg";
import CostIcon from "./../assets/icons/cost-outline.svg";
import WatchIcon from "./../assets/icons/watch.svg";
import CalendarIcon from "./../assets/icons/calendar.svg";
import MealIcon from "./../assets/icons/meal.svg";
import RedirectIcon from "./../assets/icons/redirect.svg";
import MoreIcon from "./../assets/icons/more.svg";
import FillIcon from "./../assets/icons/fill.svg";
import CapacityIcon from "./../assets/icons/capacity.svg";
import MapImage from "./../assets/map-image.png";

import hamyarSpace from "../assets/mvp/hamyar-space.png";
import hamyarLogo from "../assets/mvp/hamyar-logo.png";

import "../styles/singleEvent.scss";

function Event() {
  const location = useLocation();

  // ! use localStorge or account to set it
  const [saved, setSaved] = useState<boolean>(false);

  const eventName = decodeURI(location.pathname.split("/")[2].replaceAll("-", " "));

  const details = [
    {
      header: "14 مرداد ماه 1400",
      icon: (
        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.94242 20.5795L3.38326 19.9727L2.94242 20.5795ZM1.83626 19.4734L2.44303 19.0325L1.83626 19.4734ZM17.9264 19.4734L17.3197 19.0325L17.9264 19.4734ZM16.8203 20.5795L17.2611 21.1863L16.8203 20.5795ZM16.8203 4.48934L17.2611 3.88258L16.8203 4.48934ZM17.9264 5.5955L17.3197 6.03634L17.9264 5.5955ZM2.94242 4.48934L3.38326 5.0961H3.38326L2.94242 4.48934ZM1.83626 5.5955L2.44303 6.03634L1.83626 5.5955ZM17.0992 15.596L16.9818 14.8552H16.9818L17.0992 15.596ZM12.9429 19.7523L12.2021 19.6349V19.6349L12.9429 19.7523ZM6.88135 12.7844C6.46713 12.7844 6.13135 13.1202 6.13135 13.5344C6.13135 13.9486 6.46713 14.2844 6.88135 14.2844V12.7844ZM12.8813 14.2844C13.2956 14.2844 13.6313 13.9486 13.6313 13.5344C13.6313 13.1202 13.2956 12.7844 12.8813 12.7844V14.2844ZM12.1313 4.53442C12.1313 4.94864 12.4671 5.28442 12.8813 5.28442C13.2956 5.28442 13.6313 4.94864 13.6313 4.53442H12.1313ZM13.6313 1.53442C13.6313 1.12021 13.2956 0.784424 12.8813 0.784424C12.4671 0.784424 12.1313 1.12021 12.1313 1.53442H13.6313ZM6.13135 4.53442C6.13135 4.94864 6.46713 5.28442 6.88135 5.28442C7.29556 5.28442 7.63135 4.94864 7.63135 4.53442H6.13135ZM7.63135 1.53442C7.63135 1.12021 7.29556 0.784424 6.88135 0.784424C6.46713 0.784424 6.13135 1.12021 6.13135 1.53442H7.63135ZM18.8524 15.5344L19.602 15.5601L18.8524 15.5344ZM0.910276 9.53442L0.160716 9.50874L0.910276 9.53442ZM18.8524 9.53442L19.602 9.50874L18.8524 9.53442ZM9.88135 20.7844C7.98978 20.7844 6.63134 20.7834 5.57939 20.6694C4.54148 20.557 3.89126 20.3418 3.38326 19.9727L2.50158 21.1863C3.30791 21.7721 4.25229 22.0344 5.41782 22.1607C6.56932 22.2855 8.02319 22.2844 9.88135 22.2844V20.7844ZM0.131348 12.5344C0.131348 14.3926 0.130318 15.8464 0.255076 16.9979C0.381354 18.1635 0.643671 19.1079 1.2295 19.9142L2.44303 19.0325C2.07394 18.5245 1.8588 17.8743 1.74635 16.8364C1.63238 15.7844 1.63135 14.426 1.63135 12.5344H0.131348ZM3.38326 19.9727C3.02246 19.7106 2.70516 19.3933 2.44303 19.0325L1.2295 19.9142C1.58416 20.4023 2.01344 20.8316 2.50158 21.1863L3.38326 19.9727ZM17.3197 19.0325C17.0575 19.3933 16.7402 19.7106 16.3794 19.9727L17.2611 21.1863C17.7493 20.8316 18.1785 20.4023 18.5332 19.9142L17.3197 19.0325ZM16.3794 5.0961C16.7402 5.35824 17.0575 5.67553 17.3197 6.03634L18.5332 5.15466C18.1785 4.66651 17.7493 4.23723 17.2611 3.88258L16.3794 5.0961ZM2.50158 3.88258C2.01344 4.23723 1.58416 4.66651 1.2295 5.15466L2.44303 6.03634C2.70516 5.67553 3.02246 5.35824 3.38326 5.0961L2.50158 3.88258ZM16.9818 14.8552C14.5215 15.2449 12.5918 17.1745 12.2021 19.6349L13.6837 19.8696C13.9717 18.051 15.398 16.6248 17.2165 16.3367L16.9818 14.8552ZM6.88135 14.2844H12.8813V12.7844H6.88135V14.2844ZM18.8524 14.7844C17.9701 14.7844 17.4392 14.7828 16.9818 14.8552L17.2165 16.3367C17.5284 16.2874 17.9152 16.2844 18.8524 16.2844L18.8524 14.7844ZM18.1313 12.5344C18.1313 13.7075 18.1313 14.68 18.1029 15.5087L19.602 15.5601C19.6314 14.7002 19.6313 13.6992 19.6313 12.5344H18.1313ZM18.1029 15.5087C18.0393 17.3637 17.8323 18.327 17.3197 19.0325L18.5332 19.9142C19.3351 18.8105 19.5378 17.4335 19.602 15.5601L18.1029 15.5087ZM13.6313 21.5055C13.6314 20.5682 13.6343 20.1814 13.6837 19.8696L12.2021 19.6349C12.1297 20.0923 12.1314 20.6232 12.1313 21.5055L13.6313 21.5055ZM9.88135 22.2844C11.0461 22.2844 12.0471 22.2845 12.907 22.2551L12.8557 20.7559C12.0269 20.7843 11.0544 20.7844 9.88135 20.7844V22.2844ZM12.907 22.2551C14.7805 22.1909 16.1575 21.9881 17.2611 21.1863L16.3794 19.9727C15.6739 20.4854 14.7106 20.6924 12.8557 20.7559L12.907 22.2551ZM1.63135 12.5344C1.63135 11.3613 1.63144 10.3889 1.65984 9.5601L0.160716 9.50874C0.131254 10.3687 0.131348 11.3696 0.131348 12.5344H1.63135ZM1.65984 9.5601C1.72339 7.70518 1.93041 6.74189 2.44303 6.03634L1.2295 5.15466C0.427644 6.25832 0.224903 7.6353 0.160716 9.50874L1.65984 9.5601ZM0.910276 10.2844H18.8524V8.78442H0.910276V10.2844ZM19.6313 12.5344C19.6313 11.3696 19.6314 10.3687 19.602 9.50874L18.1029 9.5601C18.1313 10.3889 18.1313 11.3613 18.1313 12.5344H19.6313ZM19.602 9.50874C19.5378 7.6353 19.3351 6.25832 18.5332 5.15466L17.3197 6.03634C17.8323 6.74189 18.0393 7.70518 18.1029 9.5601L19.602 9.50874ZM13.6313 4.53442V3.56335H12.1313V4.53442H13.6313ZM13.6313 3.56335V1.53442H12.1313V3.56335H13.6313ZM9.88135 4.28442C11.0544 4.28442 12.0269 4.28452 12.8557 4.31291L12.907 2.81379C12.0471 2.78433 11.0461 2.78442 9.88135 2.78442V4.28442ZM12.8557 4.31291C14.7106 4.37646 15.6739 4.58349 16.3794 5.0961L17.2611 3.88258C16.1575 3.08072 14.7805 2.87798 12.907 2.81379L12.8557 4.31291ZM7.63135 4.53442V3.56335H6.13135V4.53442H7.63135ZM7.63135 3.56335V1.53442H6.13135V3.56335H7.63135ZM9.88135 2.78442C8.71657 2.78442 7.71559 2.78433 6.85567 2.81379L6.90703 4.31291C7.7358 4.28452 8.70827 4.28442 9.88135 4.28442V2.78442ZM6.85567 2.81379C4.98222 2.87798 3.60524 3.08072 2.50158 3.88258L3.38326 5.0961C4.08881 4.58349 5.0521 4.37646 6.90703 4.31291L6.85567 2.81379Z"
            fill="#A7A7A7"
          />
        </svg>
      ),
    },
    {
      header: "16:00 بعداظهر",
      icon: (
        <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.46241 8.73962V12.2396C9.46241 13.0681 10.134 13.7396 10.9624 13.7396V13.7396H12.4624M19.4624 14.7396V10.7396M15.3442 5.65365C14.8483 3.41438 12.851 1.73962 10.4625 1.73962H8.46248C6.07404 1.73962 4.07675 3.41431 3.58077 5.65352M15.3442 5.65365C15.1502 5.51679 14.9458 5.39334 14.7324 5.28459C13.6628 4.73962 12.2627 4.73962 9.4624 4.73962C6.66214 4.73962 5.26201 4.73962 4.19245 5.28459C3.97908 5.39331 3.77477 5.51671 3.58077 5.65352M15.3442 5.65365C16.0055 6.12007 16.5468 6.7423 16.9174 7.46967C17.4624 8.53923 17.4624 9.93936 17.4624 12.7396C17.4624 15.5399 17.4624 16.94 16.9174 18.0096C16.5468 18.7371 16.0054 19.3594 15.3439 19.8258M3.58077 5.65352C2.91938 6.11995 2.37802 6.74223 2.00737 7.46967C1.4624 8.53923 1.4624 9.93936 1.4624 12.7396C1.4624 15.5399 1.4624 16.94 2.00737 18.0096C2.37797 18.7369 2.91922 19.3591 3.58048 19.8255M3.58048 19.8255C4.07638 22.0648 6.07373 23.7396 8.46224 23.7396H10.4622C12.8507 23.7396 14.8479 22.065 15.3439 19.8258M3.58048 19.8255C3.77456 19.9624 3.97898 20.0859 4.19245 20.1947C5.26201 20.7396 6.66214 20.7396 9.4624 20.7396C12.2627 20.7396 13.6628 20.7396 14.7324 20.1947C14.9457 20.086 15.15 19.9626 15.3439 19.8258"
            stroke="#A7A7A7"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      header: "صبحانه کله پاچه",
      icon: (
        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.72627 10.9385C4.72627 10.3697 5.17469 9.90857 5.72785 9.90857H5.97836H7.48073H7.73101C8.28417 9.90857 8.73259 10.3697 8.73259 10.9385V12.9984C8.73259 13.5673 8.28417 14.0284 7.73101 14.0284H5.72785C5.17469 14.0284 4.72627 13.5673 4.72627 12.9984V10.9385Z"
            fill="#A7A7A7"
          />
          <path
            d="M5.39827 1.32348C5.21274 0.941898 4.76152 0.787231 4.39045 0.978022C4.01938 1.16881 3.86898 1.63281 4.05451 2.01439L4.10738 2.12313C4.28361 2.48558 4.28361 2.9122 4.10738 3.27465L4.05451 3.38339C3.86897 3.76497 4.01938 4.22897 4.39045 4.41976C4.76152 4.61055 5.21274 4.45588 5.39827 4.0743L5.45114 3.96557C5.83885 3.16818 5.83885 2.2296 5.45114 1.43221L5.39827 1.32348Z"
            fill="#A7A7A7"
          />
          <path
            d="M13.4109 1.32348C13.2254 0.941899 12.7742 0.787231 12.4031 0.978021C12.032 1.16881 11.8816 1.63281 12.0671 2.01439L12.12 2.12313C12.2962 2.48558 12.2963 2.9122 12.12 3.27465L12.0671 3.38338C11.8816 3.76496 12.032 4.22896 12.4031 4.41976C12.7742 4.61055 13.2254 4.45588 13.4109 4.0743L13.4638 3.96557C13.8515 3.16818 13.8515 2.2296 13.4638 1.43221L13.4109 1.32348Z"
            fill="#A7A7A7"
          />
          <path
            d="M9.40459 2.01439C9.59012 1.63281 9.43972 1.16881 9.06865 0.978022C8.69758 0.787231 8.24637 0.941897 8.06083 1.32348L8.00796 1.43221C7.62025 2.2296 7.62025 3.16817 8.00796 3.96557L8.06083 4.0743C8.24636 4.45588 8.69758 4.61055 9.06865 4.41976C9.43972 4.22897 9.59012 3.76497 9.40459 3.38339L9.35172 3.27465C9.17549 2.9122 9.17549 2.48558 9.35172 2.12313L9.40459 2.01439Z"
            fill="#A7A7A7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5822 5.29584C11.7277 5.01582 10.6601 5.01599 8.9033 5.01627L8.71927 5.01629C7.90494 5.01629 7.24577 5.01629 6.7029 5.03611C5.98189 5.06243 5.40566 5.12463 4.88318 5.29584C2.78135 5.98457 1.24677 7.84739 0.93167 10.0926C0.803557 11.0054 0.979235 12.0883 1.26831 13.8702L2.17068 19.4377C2.27975 20.1109 2.34637 20.5222 2.4518 20.8829C3.10657 23.123 4.98223 24.7569 7.23866 25.0528C7.60196 25.1005 8.00735 25.1004 8.6709 25.1004H8.79442C9.45797 25.1004 9.86346 25.1005 10.2268 25.0528C12.4832 24.7569 14.3588 23.123 15.0136 20.8829C15.119 20.5222 15.1857 20.1109 15.2947 19.4378L15.3814 18.9029C15.5008 18.9146 15.6217 18.9207 15.7438 18.9207C17.8181 18.9207 19.4997 17.1914 19.4997 15.0583C19.4997 13.2119 18.2397 11.6681 16.5557 11.2865C16.5878 10.8513 16.5858 10.4636 16.5337 10.0926C16.2186 7.84739 14.6841 5.98457 12.5822 5.29584ZM8.73271 6.56122C10.7133 6.56122 11.5243 6.57063 12.1261 6.76784C13.6796 7.2769 14.8139 8.65378 15.0468 10.3133C15.0973 10.6731 15.081 11.1194 14.9831 11.8652C14.9164 12.3742 14.8163 12.9921 14.6871 13.7893L13.8229 19.1212C13.7006 19.8762 13.6493 20.1835 13.5748 20.4382C13.0909 22.0939 11.7045 23.3016 10.0367 23.5203C9.78026 23.5539 9.47703 23.5555 8.73271 23.5555C7.98839 23.5555 7.68516 23.5539 7.4287 23.5203C5.7609 23.3016 4.37455 22.0939 3.89059 20.4382C3.81617 20.1835 3.76485 19.8762 3.64248 19.1212L2.7783 13.7893C2.4527 11.7803 2.32841 10.9561 2.41863 10.3133C2.65153 8.65378 3.78579 7.2769 5.33931 6.76784C5.51603 6.70994 5.71904 6.66666 5.97837 6.63526L5.97836 9.90857H6.14684C6.14684 9.90857 6.23276 9.90857 6.64763 9.90857C7.0625 9.90857 7.14842 9.90857 7.14842 9.90857H7.48073L7.48073 6.56485C7.84252 6.56125 8.25488 6.56122 8.73271 6.56122ZM15.7438 17.3757C15.7054 17.3757 15.6673 17.3748 15.6294 17.3728L16.1709 14.0315C16.2429 13.5874 16.3075 13.1889 16.3628 12.8295C17.3064 13.106 17.9973 13.9992 17.9973 15.0583C17.9973 16.3382 16.9884 17.3757 15.7438 17.3757Z"
            fill="#A7A7A7"
          />
        </svg>
      ),
    },
    {
      header: "256،000 تومان",
      icon: (
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.7104 17.9562C10.7104 18.3704 11.0462 18.7062 11.4604 18.7062C11.8747 18.7062 12.2104 18.3704 12.2104 17.9562H10.7104ZM12.2104 3.95621C12.2104 3.54199 11.8747 3.20621 11.4604 3.20621C11.0462 3.20621 10.7104 3.54199 10.7104 3.95621H12.2104ZM13.8982 7.40796C14.1053 7.76668 14.564 7.88958 14.9227 7.68248C15.2814 7.47537 15.4043 7.01668 15.1972 6.65796L13.8982 7.40796ZM14.1721 6.38246L13.5226 6.75746V6.75746L14.1721 6.38246ZM10.5905 10.6362L10.8494 9.93231L10.8494 9.9323L10.5905 10.6362ZM12.3306 11.2762L12.5895 10.5723L12.5895 10.5723L12.3306 11.2762ZM8.74898 15.53L8.09946 15.905H8.09946L8.74898 15.53ZM9.02294 14.5045C8.81583 14.1457 8.35714 14.0228 7.99842 14.2299C7.6397 14.4371 7.51679 14.8957 7.7239 15.2545L9.02294 14.5045ZM12.7883 16.6123L12.4133 15.9628L12.7883 16.6123ZM10.1328 5.30012L10.5078 5.94964L10.1328 5.30012ZM20.7104 10.9562C20.7104 16.0648 16.5691 20.2062 11.4604 20.2062V21.7062C17.3975 21.7062 22.2104 16.8933 22.2104 10.9562H20.7104ZM11.4604 20.2062C6.35182 20.2062 2.21045 16.0648 2.21045 10.9562H0.710449C0.710449 16.8933 5.52339 21.7062 11.4604 21.7062V20.2062ZM2.21045 10.9562C2.21045 5.84757 6.35182 1.70621 11.4604 1.70621V0.206207C5.52339 0.206207 0.710449 5.01915 0.710449 10.9562H2.21045ZM11.4604 1.70621C16.5691 1.70621 20.7104 5.84757 20.7104 10.9562H22.2104C22.2104 5.01915 17.3975 0.206207 11.4604 0.206207V1.70621ZM15.1972 6.65796L14.8217 6.00746L13.5226 6.75746L13.8982 7.40796L15.1972 6.65796ZM9.3985 15.155L9.02294 14.5045L7.7239 15.2545L8.09946 15.905L9.3985 15.155ZM12.0717 11.9801C13.8279 12.6261 14.0338 15.0272 12.4133 15.9628L13.1633 17.2618C15.8852 15.6904 15.5393 11.6573 12.5895 10.5723L12.0717 11.9801ZM9.75779 4.6506C7.03592 6.22207 7.38188 10.2551 10.3316 11.3401L10.8494 9.9323C9.09326 9.28635 8.8873 6.88523 10.5078 5.94964L9.75779 4.6506ZM12.2104 17.9562V17.0053H10.7104V17.9562H12.2104ZM12.2104 17.0053V10.9562H10.7104V17.0053H12.2104ZM12.4133 15.9628C12.0987 16.1444 11.76 16.2393 11.4229 16.2562L11.498 17.7543C12.0672 17.7257 12.638 17.5651 13.1633 17.2618L12.4133 15.9628ZM11.4229 16.2562C10.6199 16.2965 9.82644 15.8962 9.3985 15.155L8.09946 15.905C8.8197 17.1524 10.155 17.8217 11.498 17.7543L11.4229 16.2562ZM10.3316 11.3401L11.2015 11.6601L11.7194 10.2523L10.8494 9.93231L10.3316 11.3401ZM11.2016 11.6601L12.0717 11.9801L12.5895 10.5723L11.7193 10.2523L11.2016 11.6601ZM12.2104 10.9562L12.2104 4.90718H10.7104L10.7104 10.9562H12.2104ZM12.2104 4.90718V3.95621H10.7104V4.90718H12.2104ZM14.8217 6.00746C14.1014 4.7599 12.766 4.09063 11.4228 4.15813L11.4981 5.65624C12.3011 5.61588 13.0946 6.01619 13.5226 6.75746L14.8217 6.00746ZM11.4228 4.15813C10.8537 4.18673 10.283 4.34735 9.75779 4.6506L10.5078 5.94964C10.8223 5.76803 11.161 5.67318 11.4981 5.65624L11.4228 4.15813Z"
            fill="#A7A7A7"
          />
        </svg>
      ),
    },
  ];

  var english = /^[A-Za-z0-9]*$/;

  const saveHandler = () => {
    setSaved((prevValue) => !prevValue);
  };

  return (
    <AnimatedPage>
      <main className="event">
        <PathContainer eventName={eventName} />

        <div className="event__container">
          <div className={"header__container"}>
            <img src={InProgressIcon} alt="" />
            <h1>
              رویداد <span className={english.test(eventName[0]) ? "english" : ""}>{eventName}</span>
            </h1>
          </div>

          <div className="container__content">
            <section className="content__section">
              <header className="section__header">
                <div className="header__top">
                  <div className="right">
                    <div className="haeder__right">
                      <div className="right__header">
                        <figure className="header__right">
                          <div className="header__logo">
                            <img src={hamyarLogo} alt="" />
                          </div>
                          <div className="header__name">
                            <h4>برگزار کننده | حامی رویداد</h4>
                            <figcaption>همیار اکادمی</figcaption>
                          </div>
                        </figure>
                        <svg
                          width="26"
                          height="33"
                          viewBox="0 0 26 33"
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`header__save ${saved ? "active" : ""}`}
                          onClick={saveHandler}
                        >
                          <path
                            d="M8.09832 9.67743C7.43024 9.67743 6.88865 10.219 6.88865 10.8871C6.88865 11.5552 7.43024 12.0968 8.09832 12.0968H17.7757C18.4438 12.0968 18.9854 11.5552 18.9854 10.8871C18.9854 10.219 18.4438 9.67743 17.7757 9.67743H8.09832Z"
                            fill="#2D264B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.676 2.62548e-05C9.92393 -0.000406838 8.24457 -0.00067103 6.84535 0.453963C4.02194 1.37134 1.80835 3.58493 0.890975 6.40834C0.436341 7.80756 0.436605 9.48692 0.437038 12.239L0.437065 24.4699C0.437054 25.9695 0.437046 27.168 0.509743 28.0909C0.581377 29.0003 0.733733 29.8629 1.19543 30.5473C2.12189 31.9208 3.73657 32.6634 5.38231 32.473C6.20246 32.3781 6.95654 31.9325 7.69363 31.395C8.44167 30.8496 9.35165 30.0696 10.4902 29.0937L10.5318 29.058C11.646 28.103 11.9632 27.8576 12.2653 27.7508C12.6999 27.5973 13.1741 27.5973 13.6087 27.7508C13.9109 27.8576 14.228 28.103 15.3422 29.058L15.3838 29.0936C16.5224 30.0696 17.4323 30.8496 18.1804 31.395C18.9175 31.9325 19.6716 32.3781 20.4917 32.473C22.1375 32.6634 23.7521 31.9208 24.6786 30.5473C25.1403 29.8629 25.2926 29.0003 25.3643 28.0909C25.437 27.168 25.437 25.9695 25.437 24.47L25.437 12.239C25.4374 9.48693 25.4377 7.80756 24.983 6.40834C24.0657 3.58493 21.8521 1.37134 19.0287 0.453963C17.6295 -0.00067103 15.9501 -0.000406838 13.198 2.62548e-05H12.676ZM7.59297 2.7549C8.57959 2.43432 9.84081 2.4194 12.937 2.4194C16.0332 2.4194 17.2944 2.43432 18.2811 2.7549C20.3679 3.43296 22.0041 5.06909 22.6821 7.15595C23.0027 8.14258 23.0176 9.40379 23.0176 12.5V24.415C23.0176 25.982 23.0167 27.0846 22.9524 27.9009C22.8862 28.742 22.7627 29.0612 22.6729 29.1944C22.2518 29.8187 21.5178 30.1563 20.7698 30.0697C20.6102 30.0513 20.2875 29.9372 19.6058 29.4401C18.9441 28.9577 18.1064 28.2408 16.9167 27.2211L16.7567 27.0837C15.8823 26.3329 15.2004 25.7473 14.4147 25.4697C13.4585 25.1319 12.4155 25.1319 11.4593 25.4697C10.6736 25.7473 9.99174 26.3329 9.11738 27.0837L8.95735 27.2211C7.76766 28.2408 6.92991 28.9577 6.26825 29.4401C5.58655 29.9372 5.26384 30.0513 5.10425 30.0697C4.35618 30.1563 3.62224 29.8187 3.20112 29.1944C3.11128 29.0612 2.98787 28.742 2.92162 27.9009C2.85731 27.0846 2.85641 25.982 2.85641 24.415V12.5C2.85641 9.40379 2.87133 8.14258 3.19191 7.15595C3.86997 5.06909 5.5061 3.43296 7.59297 2.7549Z"
                            fill="#2D264B"
                          />
                        </svg>
                      </div>
                      <figure className="right__title">
                        <div className="title__image">
                          <img src={CheckIcon} alt="" />
                        </div>
                        <figcaption>بوت کمپ آموزشی همیار وردپرس</figcaption>
                      </figure>
                      <div className="right__details">
                        {details.map((item, index) => (
                          <figure className="details__item" key={index}>
                            <div>{item.icon}</div>
                            <figcaption>{item.header}</figcaption>
                          </figure>
                        ))}
                      </div>
                      <a href="https://google.com" target={"_blank"} rel="noreferrer">
                        <button>ثبت نام زود هنگام</button>
                      </a>
                    </div>
                    <div className="header__capacity">
                      <div className="capacity__item">
                        <div className="item__logo">
                          <img src={FillIcon} alt="" />
                          <span className="item__title">تکمیل شده</span>
                        </div>
                        <span className="item__content">
                          <span className="content__count">302</span>
                          <span className="content__unit">نفر</span>
                        </span>
                      </div>
                      <div className="capacity__item">
                        <div className="item__logo">
                          <img src={CapacityIcon} alt="" />
                          <span className="item__title">تکمیل شده</span>
                        </div>
                        <span className="item__content">
                          <span className="content__count">302</span>
                          <span className="content__unit">نفر</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="left">
                    <figure className="header__left">
                      <SliderWrapper direction="horizontal" pagination>
                        <SwiperSlide>
                          <img src={hamyarSpace} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={hamyarSpace} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={hamyarSpace} alt="" />
                        </SwiperSlide>
                      </SliderWrapper>
                    </figure>

                    <div className="header__location">
                      <a
                        href="https://goo.gl/maps/TYNykj9YJx2pggqs6"
                        target="_blank"
                        rel="noreferrer"
                        className="location__link"
                      >
                        <img src={MapImage} alt="" />
                        <span className="link__title">لوکیشن رویداد روی نقشه</span>
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <div className="section__dscr">
                <h6>توضیحات</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
                  تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                  دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </section>
            <aside className="event__sidebar">
              <header className="sidebar__header">
                <div className="header__icon-title">
                  <div className="header__icon">
                    <img src={CheckIcon} alt="" className="checkIcon" />
                  </div>
                  <span>رویداد هفته آینده</span>
                </div>
                <Link to={"/events"}>
                  <button>مشاهده همه</button>
                </Link>
              </header>
              <div className="event__watch">
                <img src={hamyarSpace} alt="" />
                <a href="https://google.com" target={"_blank"} rel="noreferrer">
                  <button>
                    <img src={RedirectIcon} alt="" />
                    <span>مشاهده رویداد</span>
                  </button>
                </a>
              </div>
              <header className="sidebar__header second">
                <div className="header__icon-title">
                  <div className="header__icon">
                    <img src={MoreIcon} alt="" />
                  </div>
                  <h2>رویداد هفته آینده</h2>
                </div>
                <Link to={"/events"}>
                  <button>مشاهده همه</button>
                </Link>
              </header>
              <div className="sidebar__more-events">
                <div className="more-events__event">
                  <div className="event__image">
                    <img src={hamyarSpace} alt="" />
                  </div>
                  <div className="event__content">
                    <h6>رویداد Skillup Quera</h6>
                    <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                  </div>
                  <Link to={`/events/${"Skillup Quera".replaceAll(" ", "-")}`}>
                    <button>
                      <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                          fill="#DA9E03"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className="more-events__event">
                  <div className="event__image">
                    <img src={hamyarSpace} alt="" />
                  </div>
                  <div className="event__content">
                    <h6>رویداد Skillup Quera</h6>
                    <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                  </div>
                  <Link to={`/events/${"Skillup Quera".replaceAll(" ", "-")}`}>
                    <button>
                      <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                          fill="#DA9E03"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className="more-events__event">
                  <div className="event__image">
                    <img src={hamyarSpace} alt="" />
                  </div>
                  <div className="event__content">
                    <h6>رویداد Skillup Quera</h6>
                    <p>این رویداد توسط مرجع رسمی آموزشی کشور یعنی کوئرا برگذار شده که مدرک آن به تمامی شرکت کنند ...</p>
                  </div>
                  <Link to={`/events/${"Skillup Quera".replaceAll(" ", "-")}`}>
                    <button>
                      <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
                          fill="#DA9E03"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <form className="sidebar__email-newsletters">
                <input type="email" placeholder="در خبرنامه ایمیلی ما عضو شوید" />
                <button>ثبت</button>
              </form>
            </aside>
          </div>
        </div>

        <Comments />

        <SingleEventEvents />
      </main>
    </AnimatedPage>
  );
}

export default Event;
