import { func } from 'prop-types'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../styles/store/straymao.scss'
import 'animate.css'
import StoreCard from './StoreCard'
// import { getListAsync } from '../../actions/store/index'
import { Link } from 'react-router-dom'
import LittleCardImg from './LittleCardImg'

import {
  getListAsync,
  getDetailAsync,
  getHotSaleAsync,
  getDiscountAsync,
  getDogsListAsync,
  getCatsListAsync,
  getPriceUpAsync,
  getPriceDownAsync,
} from '../../actions/store/index'

function Try(props) {
  let i = 0
  const [display, setDisplay] = useState(<></>)
  const [display2, setDisplay2] = useState(<></>)
  const [displayDiscount, setDisplayDiscount] = useState(<></>)
  let content = []
  let content2 = []
  let contentDiscount = []
  useEffect(() => {
    props.getListAsync()
    props.getDetailAsync()
    props.getHotSaleAsync()
    props.getDiscountAsync()
    props.getDogsListAsync()
    props.getCatsListAsync()
    props.getPriceUpAsync()
    props.getPriceUpAsync()
    // console.log(props.info)
  }, [])

  useEffect(() => {
    // console.log('info :', props.info)
    let info = props.info
    let info2 = props.info2
    let infoDiscount = props.infoDiscount

    if (info.length > 0 && info2.length > 0) {
      // for (let i = 0; i < info.length; i++) {
      for (let i = 0; i < 9; i++) {
        content.push(
          <StoreCard
            item={{
              name: info2[i].name,
              price: info2[i].price,
              pricing: info2[i].pricing,
            }}
          />
        )
      }
      setDisplay(content)

      for (let i = 0; i < 9; i++) {
        content2.push(
          <StoreCard
            item={{
              name: info[i].name,
              price: info[i].price,
              pricing: info[i].pricing,
            }}
          />
        )
      }
      setDisplay2(content2)

      // if (info.length > 0 && info2.length > 0 && infoDiscount.length > 0) {
      //   for (let i = 0; i < 9; i++) {
      //     contentDiscount.push(
      //       <StoreCard
      //         item={{
      //           name: infoDiscount[i].name,
      //           price: infoDiscount[i].price,
      //           pricing: infoDiscount[i].pricing,
      //         }}
      //       />
      //     )
      //   }
      //   setDisplayDiscount(contentDiscount)
      // }
    }
  }, [props.info, props.info2])

  return (
    <>
      {/* 地板 */}
      {/* onMouseOver={(storeP1Background)=> */}
      <section>
        <div className="d-flex storeP1Background" data-speed="1">
          <div id="storeP1BackgroundTop">
            <img
              id="storeP1BackgroundMouse"
              className="animate__animated animate__bounceInDown"
              src="./image/store/mouse.png"
              alt=""
            />
            <img
              id="storeP1BackgroundCat"
              className="animate__animated animate__slideInLeft"
              src="./image/store/cat_PNG113.png"
              alt=""
            />
            <img
              id="storeP1BackgroundDog"
              className="animate__animated animate__slideInRight"
              src="./image/store/未命名-2.png"
              alt=""
            />

            <div className="storeP1BackgroundCatTower">
              <img
                id="storeP1BackgroundCatTower"
                className="animate__animated animate__slideInLeft"
                src="./image/store/cat-3953989_1280.png"
                alt=""
              />
              {/* hover cards and link to */}

              <a href="https://www.google.com/">
                <div className="storeP1BackgroundCatTowerCircle2">
                  <svg
                    id="storeP1BackgroundCatTowerCircle2"
                    className="animate__animated animate__slideInDown storeP1BackgroundCatTowerCircle2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="27.5"
                    height="27.5"
                    viewBox="0 0 27.5 27.5"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_865"
                          data-name="Rectangle 865"
                          width="27.5"
                          height="27.5"
                          transform="translate(235.5 376.5)"
                          fill="none"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_688"
                      data-name="Group 688"
                      transform="translate(-235.5 -376.5)"
                      opacity="0.2"
                    >
                      <g id="Group_687" data-name="Group 687">
                        <g
                          id="Group_686"
                          data-name="Group 686"
                          clip-path="url(#clip-path)"
                        >
                          <circle
                            id="Ellipse_19"
                            data-name="Ellipse 19"
                            cx="10.25"
                            cy="10.25"
                            r="10.25"
                            transform="translate(239 380)"
                            fill="none"
                            stroke="#595757"
                            stroke-miterlimit="10"
                            stroke-width="7"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <div className="StoreP1BackgroundCatTowerCircleCard d-flex">
                    <LittleCardImg />
                  </div>
                </div>
              </a>

              <svg
                id="storeP1BackgroundCatTowerCircle"
                xmlns="http://www.w3.org/2000/svg"
                width="27.5"
                height="27.5"
                viewBox="0 0 27.5 27.5"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_865"
                      data-name="Rectangle 865"
                      width="27.5"
                      height="27.5"
                      transform="translate(235.5 376.5)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_688"
                  data-name="Group 688"
                  transform="translate(-235.5 -376.5)"
                  opacity="0.2"
                >
                  <g id="Group_687" data-name="Group 687">
                    <g
                      id="Group_686"
                      data-name="Group 686"
                      clip-path="url(#clip-path)"
                    >
                      <circle
                        id="Ellipse_19"
                        data-name="Ellipse 19"
                        cx="10.25"
                        cy="10.25"
                        r="10.25"
                        transform="translate(239 380)"
                        fill="none"
                        stroke="#595757"
                        stroke-miterlimit="10"
                        stroke-width="7"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <img
              id="storeP1BackgroundDogFood"
              className="animate__animated animate__slideInRight"
              src="./image/store/dog-food2.png"
              alt=""
            />

            {/* hover cards and link to */}
            <a href="https://www.google.com/">
              <div className="storeP1BackgroundDogFoodCircle2">
                <svg
                  id="storeP1BackgroundDogFoodCircle2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.5"
                  height="27.5"
                  viewBox="0 0 27.5 27.5"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_865"
                        data-name="Rectangle 865"
                        width="27.5"
                        height="27.5"
                        transform="translate(235.5 376.5)"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_688"
                    data-name="Group 688"
                    transform="translate(-235.5 -376.5)"
                    opacity="0.2"
                  >
                    <g id="Group_687" data-name="Group 687">
                      <g
                        id="Group_686"
                        data-name="Group 686"
                        clip-path="url(#clip-path)"
                      >
                        <circle
                          id="Ellipse_19"
                          data-name="Ellipse 19"
                          cx="10.25"
                          cy="10.25"
                          r="10.25"
                          transform="translate(239 380)"
                          fill="none"
                          stroke="#595757"
                          stroke-miterlimit="10"
                          stroke-width="7"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <div className="StoreP1BackgroundDogFoodCircleCard d-flex">
                  <LittleCardImg />
                </div>
              </div>
            </a>

            <svg
              id="storeP1BackgroundDogFoodCircle"
              xmlns="http://www.w3.org/2000/svg"
              width="27.5"
              height="27.5"
              viewBox="0 0 27.5 27.5"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_865"
                    data-name="Rectangle 865"
                    width="27.5"
                    height="27.5"
                    transform="translate(235.5 376.5)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_688"
                data-name="Group 688"
                transform="translate(-235.5 -376.5)"
                opacity="0.2"
              >
                <g id="Group_687" data-name="Group 687">
                  <g
                    id="Group_686"
                    data-name="Group 686"
                    clip-path="url(#clip-path)"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="10.25"
                      cy="10.25"
                      r="10.25"
                      transform="translate(239 380)"
                      fill="none"
                      stroke="#595757"
                      stroke-miterlimit="10"
                      stroke-width="7"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <img
              id="storeP1BackgroundDogFoodBowl"
              className="animate__animated animate__slideInUp"
              src="./image/store/343-3432319_low-carb-pet-food-manhaten-cat.png"
              alt=""
            />
            <img
              id="storeP1BackgroundBall"
              className="animate__animated animate__slideInRight"
              src="./image/store/ball.png"
              alt=""
            />

            <svg
              id="storeP1BackgroundBallCircle2"
              xmlns="http://www.w3.org/2000/svg"
              width="27.5"
              height="27.5"
              viewBox="0 0 27.5 27.5"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_865"
                    data-name="Rectangle 865"
                    width="27.5"
                    height="27.5"
                    transform="translate(235.5 376.5)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_688"
                data-name="Group 688"
                transform="translate(-235.5 -376.5)"
                opacity="0.2"
              >
                <g id="Group_687" data-name="Group 687">
                  <g
                    id="Group_686"
                    data-name="Group 686"
                    clip-path="url(#clip-path)"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="10.25"
                      cy="10.25"
                      r="10.25"
                      transform="translate(239 380)"
                      fill="none"
                      stroke="#595757"
                      stroke-miterlimit="10"
                      stroke-width="7"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <svg
              id="storeP1BackgroundBallCircle"
              xmlns="http://www.w3.org/2000/svg"
              width="27.5"
              height="27.5"
              viewBox="0 0 27.5 27.5"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_865"
                    data-name="Rectangle 865"
                    width="27.5"
                    height="27.5"
                    transform="translate(235.5 376.5)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_688"
                data-name="Group 688"
                transform="translate(-235.5 -376.5)"
                opacity="0.2"
              >
                <g id="Group_687" data-name="Group 687">
                  <g
                    id="Group_686"
                    data-name="Group 686"
                    clip-path="url(#clip-path)"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="10.25"
                      cy="10.25"
                      r="10.25"
                      transform="translate(239 380)"
                      fill="none"
                      stroke="#595757"
                      stroke-miterlimit="10"
                      stroke-width="7"
                    />
                  </g>
                </g>
              </g>
            </svg>

            {/* 牆 */}
            <img
              id="storeP1BackgroundMoon"
              className="animate__animated animate__slideInDown"
              src="./image/store/cat_tree01.png"
              alt=""
            />

            {/* hover cards and link to */}
            <a href="https://www.google.com/">
              <div className="storeP1BackgroundMoonCircle2">
                <svg
                  id="storeP1BackgroundMoonCircle2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.5"
                  height="27.5"
                  viewBox="0 0 27.5 27.5"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_865"
                        data-name="Rectangle 865"
                        width="27.5"
                        height="27.5"
                        transform="translate(235.5 376.5)"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_688"
                    data-name="Group 688"
                    transform="translate(-235.5 -376.5)"
                    opacity="0.2"
                  >
                    <g id="Group_687" data-name="Group 687">
                      <g
                        id="Group_686"
                        data-name="Group 686"
                        clip-path="url(#clip-path)"
                      >
                        <circle
                          id="Ellipse_19"
                          data-name="Ellipse 19"
                          cx="10.25"
                          cy="10.25"
                          r="10.25"
                          transform="translate(239 380)"
                          fill="none"
                          stroke="#595757"
                          stroke-miterlimit="10"
                          stroke-width="7"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <div className="storeP1BackgroundMoonCircleCard d-flex">
                  <LittleCardImg />
                </div>
              </div>
            </a>

            <svg
              id="storeP1BackgroundMoonCircle"
              xmlns="http://www.w3.org/2000/svg"
              width="27.5"
              height="27.5"
              viewBox="0 0 27.5 27.5"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_865"
                    data-name="Rectangle 865"
                    width="27.5"
                    height="27.5"
                    transform="translate(235.5 376.5)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_688"
                data-name="Group 688"
                transform="translate(-235.5 -376.5)"
                opacity="0.2"
              >
                <g id="Group_687" data-name="Group 687">
                  <g
                    id="Group_686"
                    data-name="Group 686"
                    clip-path="url(#clip-path)"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="10.25"
                      cy="10.25"
                      r="10.25"
                      transform="translate(239 380)"
                      fill="none"
                      stroke="#595757"
                      stroke-miterlimit="10"
                      stroke-width="7"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <img
              id="storeP1BackgroundAngle"
              className="animate__animated animate__slideInDown"
              src="./image/store/cat_tree02.png"
              alt=""
            />

            <a href="https://www.google.com/">
              <div className="storeP1BackgroundAngleCircle2">
                <svg
                  id="storeP1BackgroundAngleCircle2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.5"
                  height="27.5"
                  viewBox="0 0 27.5 27.5"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_865"
                        data-name="Rectangle 865"
                        width="27.5"
                        height="27.5"
                        transform="translate(235.5 376.5)"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_688"
                    data-name="Group 688"
                    transform="translate(-235.5 -376.5)"
                    opacity="0.2"
                  >
                    <g id="Group_687" data-name="Group 687">
                      <g
                        id="Group_686"
                        data-name="Group 686"
                        clip-path="url(#clip-path)"
                      >
                        <circle
                          id="Ellipse_19"
                          data-name="Ellipse 19"
                          cx="10.25"
                          cy="10.25"
                          r="10.25"
                          transform="translate(239 380)"
                          fill="none"
                          stroke="#595757"
                          stroke-miterlimit="10"
                          stroke-width="7"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <div className="storeP1BackgroundAngleCircleCard d-flex">
                  <LittleCardImg />
                </div>
              </div>
            </a>

            <svg
              id="storeP1BackgroundAngleCircle"
              xmlns="http://www.w3.org/2000/svg"
              width="27.5"
              height="27.5"
              viewBox="0 0 27.5 27.5"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_865"
                    data-name="Rectangle 865"
                    width="27.5"
                    height="27.5"
                    transform="translate(235.5 376.5)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_688"
                data-name="Group 688"
                transform="translate(-235.5 -376.5)"
                opacity="0.2"
              >
                <g id="Group_687" data-name="Group 687">
                  <g
                    id="Group_686"
                    data-name="Group 686"
                    clip-path="url(#clip-path)"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="10.25"
                      cy="10.25"
                      r="10.25"
                      transform="translate(239 380)"
                      fill="none"
                      stroke="#595757"
                      stroke-miterlimit="10"
                      stroke-width="7"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <img
              id="storeP1BackgroundStep1"
              className="animate__animated animate__slideInDown"
              src="./image/store/cat_tree03.png"
              alt=""
            />
            <img
              id="storeP1BackgroundStep2"
              className="animate__animated animate__slideInDown"
              src="./image/store/cat_tree03.png"
              alt=""
            />
            <img
              id="storeP1BackgroundStep3"
              className="animate__animated animate__slideInDown"
              src="./image/store/cat_tree03.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="container" data-speed="0">
        <div className="row">
          {/* <!-- 大按鈕 --> */}
          <article id="bigBtn" className="d-flex">
            <button
              className="storeP1Btn"
              id="newsBigBtn"
              type="button"
              value="News"
            >
              News
            </button>
            <button
              className="storeP1Btn"
              id="catBigBtn"
              type="button"
              value="Cats"
            >
              Cat
            </button>
            <button
              className="storeP1Btn"
              id="dogBigBtn"
              type="button"
              value="Dogs"
            >
              Dog
            </button>
          </article>
          {/* <!-- 熱銷推薦 --> */}
          <div className="storeP1Title center">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">熱銷推薦</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="container storeP1Bottom" data-speed="0">
        <div className="row d-flex" id="between">
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.636"
              height="21.653"
              viewBox="0 0 17.636 21.653"
            >
              <path
                id="Path_1866"
                data-name="Path 1866"
                d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                transform="translate(1.501 1.531)"
                fill="none"
                stroke="#ed8f8f"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg>
          </div>
          {display}
          {/* <StoreCard item={{ name: '546', price: 100 }} />
          <StoreCard item={{ name: '123', price: 100 }} />
          <StoreCard item={{ name: '123', price: 100, pricing: 200 }} /> */}

          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.381"
              height="22.256"
              viewBox="0 0 18.381 22.256"
            >
              <path
                id="Path_1865"
                data-name="Path 1865"
                d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                transform="matrix(-0.999, -0.035, 0.035, -0.999, 16.179, 20.673)"
                fill="none"
                stroke="#ed8f8f"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- 特價商品 --> */}
      <div className="container">
        <div className="row">
          {/* <!-- 特價商品 --> */}
          <div className="storeP1Title center">
            <div className="line1"></div>
            <div className="storeP1GoodsWords">特價商品</div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex" id="between">
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.636"
              height="21.653"
              viewBox="0 0 17.636 21.653"
            >
              <path
                id="Path_1866"
                data-name="Path 1866"
                d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                transform="translate(1.501 1.531)"
                fill="none"
                stroke="#ed8f8f"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg>
          </div>

          {display2}
          {/* <StoreCard item={{ name: '123', price: 100 }} />
          <StoreCard item={{ name: '123', price: 100 }} />
          <StoreCard item={{ name: '123', price: 100 }} /> */}

          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.381"
              height="22.256"
              viewBox="0 0 18.381 22.256"
            >
              <path
                id="Path_1865"
                data-name="Path 1865"
                d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                transform="matrix(-0.999, -0.035, 0.035, -0.999, 16.179, 20.673)"
                fill="none"
                stroke="#ed8f8f"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- 特價商品結束 --> */}
      <aside>
        {/* <!-- <div id="cartAndDonate" className="d-flex"> --> */}
        <div className="circle-s circle-cart">
          <div className="div-cart">
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
        <div className="circle-l circle-donate">
          <div>捐款</div>
        </div>
        {/* <!-- </div> --> */}
      </aside>
    </>
  )
}

// export default Storepage

const mapStateToProps = (store) => {
  return {
    info: store.storeReducer.getStoreList,
    info2: store.storeReducer.getHot,
    infoDiscount: store.storeReducer.getDiscount,
  }
}
const mapDispatchToProps = null

export default connect(mapStateToProps, {
  getListAsync,
  getDetailAsync,
  getHotSaleAsync,
  getDiscountAsync,
  getDogsListAsync,
  getCatsListAsync,
  getPriceUpAsync,
  getPriceDownAsync,
})(Try)
