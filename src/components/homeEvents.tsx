import { Link } from "react-router-dom";

import Header from "././header";

// header icon
import CompassIcon from "./../assets/icons/compass.svg";

// demo image
import EventImage from "./../assets/dev-summit.png";
import CurrentEventImage from "./../assets/current-events-image.png";

import "../styles/homeEvents.scss";

function HomeEvents() {
  return (
    <section className="home__events events">
      <Header title="رویداد های جاری" icon={CompassIcon} />
      <div className="events__container">
        {Array.apply(0, new Array(3)).map((item, index) => (
          <div className="events__container__content">
            <div className="content__header">
              <img src={CurrentEventImage} alt="" className="header-image" />
              <svg
                width="500"
                height="243"
                viewBox="0 0 500 243"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="header-frame"
              >
                <path
                  d="M0.5 19.0369C0.5 8.79871 8.79032 0.5 19.0157 0.5H480.984C491.21 0.5 499.5 8.79871 499.5 19.0369V198.207C499.5 222.67 479.691 242.5 455.257 242.5H443.243C432.754 242.5 424.424 233.823 419.944 224.097C412.161 207.198 395.089 195.468 375.28 195.468C355.47 195.468 338.398 207.198 330.615 224.097C326.135 233.823 317.805 242.5 307.316 242.5H19.0157C8.79032 242.5 0.5 234.201 0.5 223.963V19.0369Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
              <div className="header-logo">
                <img src={EventImage} alt="" />
              </div>
              <div className="header-timer">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 5.725C8.5 5.44886 8.27614 5.225 8 5.225C7.72386 5.225 7.5 5.44886 7.5 5.725H8.5ZM10.1 9.725C10.3761 9.725 10.6 9.50114 10.6 9.225C10.6 8.94886 10.3761 8.725 10.1 8.725V9.725ZM1.38765 2.00957C1.17202 2.18207 1.13706 2.49672 1.30957 2.71235C1.48207 2.92798 1.79672 2.96294 2.01235 2.79043L1.38765 2.00957ZM3.76235 1.39043C3.97798 1.21793 4.01294 0.903283 3.84043 0.687652C3.66793 0.472022 3.35328 0.437061 3.13765 0.609566L3.76235 1.39043ZM13.9877 2.79043C14.2033 2.96294 14.5179 2.92798 14.6904 2.71235C14.8629 2.49672 14.828 2.18207 14.6123 2.00957L13.9877 2.79043ZM12.8623 0.609566C12.6467 0.437061 12.3321 0.472022 12.1596 0.687652C11.9871 0.903283 12.022 1.21793 12.2377 1.39043L12.8623 0.609566ZM8 8.175H7.5H8ZM7.5 5.725L7.5 8.175H8.5L8.5 5.725H7.5ZM14.5 8.525C14.5 12.1149 11.5899 15.025 8 15.025V16.025C12.1421 16.025 15.5 12.6671 15.5 8.525H14.5ZM8 15.025C4.41015 15.025 1.5 12.1149 1.5 8.525H0.5C0.5 12.6671 3.85786 16.025 8 16.025V15.025ZM1.5 8.525C1.5 4.93515 4.41015 2.025 8 2.025V1.025C3.85786 1.025 0.5 4.38286 0.5 8.525H1.5ZM8 2.025C11.5899 2.025 14.5 4.93515 14.5 8.525H15.5C15.5 4.38286 12.1421 1.025 8 1.025V2.025ZM2.01235 2.79043L3.76235 1.39043L3.13765 0.609566L1.38765 2.00957L2.01235 2.79043ZM14.6123 2.00957L12.8623 0.609566L12.2377 1.39043L13.9877 2.79043L14.6123 2.00957ZM9.05 9.725H10.1V8.725H9.05V9.725ZM7.5 8.175C7.5 9.03104 8.19396 9.725 9.05 9.725V8.725C8.74624 8.725 8.5 8.47876 8.5 8.175H7.5Z"
                    fill="#494949"
                  />
                </svg>

                <time>
                  <span>03 </span>: <span>07 </span>: <span>15 </span>
                </time>
              </div>

              <div className="header-hover">
                <button className="see-location">
                  <a target={"_blank"} href="https://goo.gl/maps/B76C4UNniybAizSU9" rel="noreferrer">
                    مشاهده روی نقشه
                  </a>
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 0.25C5.78653 0.25 4.57216 0.63338 3.55 1.4L1.35 3.05C0.657534 3.56935 0.25 4.38442 0.25 5.25V13.879C0.25 16.092 2.77641 17.3552 4.54677 16.0274C5.27372 15.4822 6.13641 15.2097 7 15.2097C7.86359 15.2097 8.72628 15.4822 9.45323 16.0274L9.55 16.1C10.5722 16.8666 11.7865 17.25 13 17.25C14.2135 17.25 15.4278 16.8666 16.45 16.1L18.65 14.45C19.3425 13.9306 19.75 13.1156 19.75 12.25V3.62097C19.75 1.40801 17.2236 0.144804 15.4532 1.47258C14.7263 2.01779 13.8636 2.29032 13 2.29032C12.1364 2.29032 11.2737 2.01779 10.5468 1.47258L10.45 1.4C9.42784 0.63338 8.21347 0.25 7 0.25ZM4.45 2.6C4.99425 2.19181 5.61172 1.93066 6.25 1.8165V13.7601C5.32751 13.8848 4.4292 14.2406 3.64677 14.8274C2.86526 15.4136 1.75 14.8559 1.75 13.879V5.25C1.75 4.85655 1.93524 4.48607 2.25 4.25L4.45 2.6ZM10.3532 14.8274C9.5708 14.2406 8.67249 13.8848 7.75 13.7601V1.8165C8.38828 1.93066 9.00575 2.19181 9.55 2.6L9.64677 2.67258C10.4292 3.2594 11.3275 3.61519 12.25 3.73987V15.6835C11.6117 15.5693 10.9943 15.3082 10.45 14.9L10.3532 14.8274ZM15.55 14.9C15.0057 15.3082 14.3883 15.5693 13.75 15.6835V3.73987C14.6725 3.61519 15.5708 3.2594 16.3532 2.67258C17.1347 2.08645 18.25 2.64408 18.25 3.62097V12.25C18.25 12.6434 18.0648 13.0139 17.75 13.25L15.55 14.9Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <div className="header-hover__rate">
                  <div className="header-hover__rate__caption">
                    <span>5.00</span>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.7103 6.64541C14.5774 6.25309 14.1516 6.04279 13.7593 6.17568C13.367 6.30857 13.1567 6.73434 13.2896 7.12666C13.7207 8.39931 14.9433 9.23366 16.2924 9.23366C16.7066 9.23366 17.0424 8.89787 17.0424 8.48366C17.0424 8.06945 16.7066 7.73366 16.2924 7.73366C15.5529 7.73366 14.9246 7.27803 14.7103 6.64541Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.1643 3.27559C14.8535 -0.758531 9.14631 -0.758531 7.83555 3.27559C7.45017 4.46167 6.34488 5.26471 5.09776 5.26471C0.856037 5.26471 -0.907588 10.6926 2.52404 13.1858C3.53298 13.9188 3.95516 15.2182 3.56978 16.4043C2.25902 20.4384 6.87624 23.793 10.3079 21.2998C11.3168 20.5667 12.683 20.5667 13.692 21.2998C17.1236 23.793 21.7408 20.4384 20.4301 16.4043C20.0447 15.2182 20.4669 13.9188 21.4758 13.1858C24.9074 10.6926 23.1438 5.26471 18.9021 5.26471C17.655 5.26471 16.5497 4.46167 16.1643 3.27559ZM9.26213 3.73912C10.1239 1.08696 13.876 1.08696 14.7377 3.73912C15.3239 5.54323 17.0051 6.76471 18.9021 6.76471C21.6907 6.76471 22.8502 10.3332 20.5941 11.9723C19.0594 13.0873 18.4173 15.0637 19.0035 16.8678C19.8652 19.52 16.8297 21.7254 14.5736 20.0863C13.039 18.9713 10.9609 18.9712 9.4262 20.0863C7.17014 21.7254 4.13463 19.52 4.99637 16.8678C5.58256 15.0637 4.94039 13.0873 3.40572 11.9723C1.14966 10.3332 2.30912 6.76471 5.09776 6.76471C6.99472 6.76471 8.67594 5.54323 9.26213 3.73912Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <button className="header-hover__rate__like">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.00001 6.77673C4.2068 6.10613 4.57722 5.47603 5.14527 4.91284C5.59251 4.46941 6.05668 4.17698 6.52241 4M12.6007 2.14593C14.2743 1.08425 16.9773 0.0803204 19.3115 2.46071C24.8525 8.11136 15.3502 19 11 19C6.64988 19 -2.85249 8.11136 2.68853 2.46072C5.02272 0.0803466 7.72564 1.08427 9.39929 2.14593C10.345 2.74582 11.655 2.74582 12.6007 2.14593Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="caption">
              <div className="caption__item">
                <div className="caption__item__icon">
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4435 7.99988C13.983 6.68946 12.6726 5.37903 11.3622 5.91862L8.92346 6.9228C8.30569 7.17718 7.81511 7.66776 7.56073 8.28553L6.55654 10.7243C6.01696 12.0347 7.32738 13.3451 8.63781 12.8055L11.0765 11.8013C11.6943 11.547 12.1849 11.0564 12.4393 10.4386L13.4435 7.99988ZM11.8825 7.18224C12.0697 7.10516 12.2569 7.29236 12.1798 7.47957L11.1756 9.9183C11.06 10.1991 10.837 10.4221 10.5562 10.5377L8.11749 11.5419C7.93029 11.619 7.74308 11.4318 7.82017 11.2446L8.82435 8.80585C8.93998 8.52505 9.16297 8.30205 9.44378 8.18643L11.8825 7.18224Z"
                      fill="#8D56C3"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7939 0.065486C12.0609 -1.00459e-05 11.1652 -5.5398e-06 10.0321 1.07618e-07H9.96792C8.83476 -5.6484e-06 7.93907 -1.02631e-05 7.20607 0.0654857C6.45314 0.132763 5.82338 0.272189 5.22818 0.577521C5.074 0.656614 4.92385 0.743308 4.77826 0.837284C4.21624 1.20007 3.78061 1.67574 3.34588 2.29417C2.92266 2.89621 2.47482 3.6719 1.90825 4.65325L1.87616 4.70882C1.30958 5.69017 0.861729 6.46585 0.551952 7.13339C0.233749 7.81909 0.0396156 8.43419 0.00644445 9.10231C-0.00214814 9.27538 -0.00214814 9.44877 0.0064444 9.62184C0.0396155 10.29 0.233749 10.9051 0.551952 11.5908C0.861726 12.2583 1.30957 13.034 1.87615 14.0153L1.90823 14.0709C2.47481 15.0522 2.92266 15.8279 3.34588 16.43C3.78061 17.0484 4.21624 17.5241 4.77826 17.8869C4.92384 17.9808 5.074 18.0675 5.22818 18.1466C5.82338 18.452 6.45313 18.5914 7.20607 18.6587C7.93905 18.7242 8.83473 18.7242 9.96786 18.7242H10.0321C11.1652 18.7242 12.0609 18.7242 12.7939 18.6587C13.5469 18.5914 14.1766 18.452 14.7718 18.1466C14.926 18.0675 15.0761 17.9808 15.2217 17.8869C15.7838 17.5241 16.2194 17.0484 16.6541 16.43C17.0773 15.8279 17.5252 15.0523 18.0917 14.0709L18.1238 14.0153C18.6904 13.034 19.1383 12.2583 19.448 11.5908C19.7663 10.9051 19.9604 10.29 19.9936 9.62184C20.0021 9.44877 20.0021 9.27538 19.9936 9.10231C19.9604 8.4342 19.7663 7.81909 19.448 7.1334C19.1383 6.46585 18.6904 5.69016 18.1238 4.70881L18.0917 4.6532C17.5252 3.67187 17.0773 2.8962 16.6541 2.29417C16.2194 1.67575 15.7838 1.20007 15.2217 0.837284C15.0762 0.743309 14.926 0.656615 14.7718 0.577522C14.1766 0.272189 13.5469 0.132763 12.7939 0.065486ZM5.85193 1.79342C6.23568 1.59656 6.67556 1.48489 7.32769 1.42662C7.99286 1.36718 8.82769 1.36656 10 1.36656C11.1723 1.36656 12.0071 1.36718 12.6723 1.42662C13.3244 1.48489 13.7643 1.59656 14.1481 1.79342C14.262 1.85188 14.373 1.91596 14.4806 1.98542C14.843 2.21932 15.1596 2.54443 15.5362 3.08006C15.9202 3.6264 16.3382 4.34906 16.9243 5.36432C17.5105 6.37957 17.9273 7.10287 18.2085 7.70863C18.4841 8.30254 18.6073 8.73932 18.6287 9.17008C18.635 9.298 18.635 9.42616 18.6287 9.55408C18.6073 9.98484 18.4841 10.4216 18.2085 11.0155C17.9273 11.6213 17.5105 12.3446 16.9243 13.3598C16.3382 14.3751 15.9202 15.0978 15.5362 15.6441C15.1596 16.1797 14.843 16.5048 14.4806 16.7387C14.373 16.8082 14.262 16.8723 14.1481 16.9307C13.7643 17.1276 13.3244 17.2393 12.6723 17.2975C12.0071 17.357 11.1723 17.3576 10 17.3576C8.82769 17.3576 7.99286 17.357 7.32769 17.2975C6.67556 17.2393 6.23568 17.1276 5.85193 16.9307C5.73798 16.8723 5.62699 16.8082 5.51938 16.7387C5.15703 16.5048 4.84038 16.1797 4.46385 15.6441C4.07979 15.0978 3.66183 14.3751 3.07568 13.3598C2.48952 12.3446 2.07265 11.6213 1.79154 11.0155C1.51594 10.4216 1.39271 9.98484 1.37132 9.55407C1.36497 9.42615 1.36497 9.298 1.37132 9.17008C1.39271 8.73931 1.51594 8.30254 1.79154 7.70863C2.07265 7.10286 2.48952 6.37957 3.07568 5.36432C3.66183 4.34906 4.07979 3.6264 4.46385 3.08006C4.84038 2.54443 5.15703 2.21932 5.51938 1.98542C5.62699 1.91596 5.73798 1.85188 5.85193 1.79342Z"
                      fill="#8D56C3"
                    />
                  </svg>
                </div>
                <span>
                  {"جشنواره توسعه دهندگان".length >= 21
                    ? "جشنواره توسعه دهندگان".slice(0, 21) + " ..."
                    : "جشنواره توسعه دهندگان"}
                </span>
              </div>
              <div className="caption__item">
                <div className="caption__item__icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.25 18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18H10.25ZM11.75 4C11.75 3.58579 11.4142 3.25 11 3.25C10.5858 3.25 10.25 3.58579 10.25 4H11.75ZM13.4377 7.45175C13.6448 7.81047 14.1035 7.93338 14.4623 7.72627C14.821 7.51916 14.9439 7.06047 14.7368 6.70175L13.4377 7.45175ZM13.7117 6.42625L13.0622 6.80125V6.80125L13.7117 6.42625ZM10.1301 10.68L10.389 9.9761L10.389 9.97609L10.1301 10.68ZM11.8702 11.32L12.1291 10.6161L12.129 10.6161L11.8702 11.32ZM8.28853 15.5738L7.63901 15.9488H7.63902L8.28853 15.5738ZM8.56249 14.5483C8.35538 14.1895 7.89669 14.0666 7.53797 14.2737C7.17925 14.4808 7.05634 14.9395 7.26345 15.2983L8.56249 14.5483ZM12.3279 16.6561L11.9529 16.0066L12.3279 16.6561ZM9.67234 5.34391L10.0473 5.99343L9.67234 5.34391ZM20.25 11C20.25 16.1086 16.1086 20.25 11 20.25V21.75C16.9371 21.75 21.75 16.9371 21.75 11H20.25ZM11 20.25C5.89137 20.25 1.75 16.1086 1.75 11H0.25C0.25 16.9371 5.06294 21.75 11 21.75V20.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75V0.25C5.06294 0.25 0.25 5.06294 0.25 11H1.75ZM11 1.75C16.1086 1.75 20.25 5.89137 20.25 11H21.75C21.75 5.06294 16.9371 0.25 11 0.25V1.75ZM14.7368 6.70175L14.3612 6.05125L13.0622 6.80125L13.4377 7.45175L14.7368 6.70175ZM8.93805 15.1988L8.56249 14.5483L7.26345 15.2983L7.63901 15.9488L8.93805 15.1988ZM11.6113 12.0239C13.3674 12.6699 13.5734 15.071 11.9529 16.0066L12.7029 17.3056C15.4247 15.7341 15.0788 11.7011 12.1291 10.6161L11.6113 12.0239ZM9.29734 4.6944C6.57547 6.26586 6.92143 10.2989 9.87116 11.3839L10.389 9.97609C8.63281 9.33015 8.42685 6.92902 10.0473 5.99343L9.29734 4.6944ZM11.75 18V17.049H10.25V18H11.75ZM11.75 17.049V11H10.25V17.049H11.75ZM11.9529 16.0066C11.6383 16.1882 11.2996 16.2831 10.9624 16.3L11.0376 17.7981C11.6068 17.7695 12.1776 17.6089 12.7029 17.3056L11.9529 16.0066ZM10.9624 16.3C10.1595 16.3403 9.36599 15.94 8.93805 15.1988L7.63902 15.9488C8.35925 17.1962 9.69453 17.8655 11.0376 17.7981L10.9624 16.3ZM9.87113 11.3839L10.7411 11.7039L11.2589 10.2961L10.389 9.9761L9.87113 11.3839ZM10.7411 11.7039L11.6113 12.0239L12.129 10.6161L11.2589 10.2961L10.7411 11.7039ZM11.75 11L11.75 4.95097H10.25L10.25 11H11.75ZM11.75 4.95097V4H10.25V4.95097H11.75ZM14.3612 6.05125C13.6409 4.80369 12.3055 4.13442 10.9624 4.20192L11.0376 5.70003C11.8406 5.65968 12.6342 6.05999 13.0622 6.80125L14.3612 6.05125ZM10.9624 4.20192C10.3933 4.23052 9.82258 4.39115 9.29734 4.6944L10.0473 5.99343C10.3619 5.81182 10.7005 5.71697 11.0376 5.70003L10.9624 4.20192Z"
                      fill="#47B044"
                    />
                  </svg>
                </div>
                <span>55،000 تومان</span>
              </div>
              <div className="caption__item">
                <div className="caption__item__icon">
                  <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7808 19.7005L11.1906 19.2377L11.7808 19.7005ZM6.21921 19.7005L5.62903 20.1633L6.21921 19.7005ZM9 22.0055V21.2555V22.0055ZM16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087H16.25ZM6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087H0.25C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L6.80938 19.2377ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75V0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087H1.75ZM9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087H17.75C17.75 4.49277 13.8833 0.25 9 0.25V1.75ZM11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555V22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.2886 21.5476 11.7849 20.9107 12.371 20.1633L11.1906 19.2377ZM5.62903 20.1633C6.21511 20.9107 6.71136 21.5476 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555V21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377L5.62903 20.1633ZM5.25 10C5.25 12.0711 6.92893 13.75 9 13.75V12.25C7.75736 12.25 6.75 11.2426 6.75 10H5.25ZM9 13.75C11.0711 13.75 12.75 12.0711 12.75 10H11.25C11.25 11.2426 10.2426 12.25 9 12.25V13.75ZM12.75 10C12.75 7.92893 11.0711 6.25 9 6.25V7.75C10.2426 7.75 11.25 8.75736 11.25 10H12.75ZM9 6.25C6.92893 6.25 5.25 7.92893 5.25 10H6.75C6.75 8.75736 7.75736 7.75 9 7.75V6.25Z"
                      fill="#398DCB"
                    />
                  </svg>
                </div>
                <span>ایران ، تهران ، قم ، کاشان اصفهان</span>
              </div>
            </div>
            <Link to={`/events/${"جشنواره توسعه دهندگان".replaceAll(" ", "-")}`}>
              <div className="events__container__content__button ">
                <button className="btn second">مشاهده جزئیات رویداد</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeEvents;
