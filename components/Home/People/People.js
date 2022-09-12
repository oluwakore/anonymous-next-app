import React, { useState } from "react";
import Link from "next/link";
import styles from  "./People.module.scss";

export default function People() {
  const [step, setStep] = useState(0);
  return (
    <div className={styles.peopleContainer}>
      <div className={styles.peopleMain}>
        <div className={styles.peopleDesc}>
          <h1>What People Say About US</h1>
          <p>
            The decision to go through this process has proven to be full of
            blessing for my life as I am healed from the pain of emotional
            stress
          </p>
          <Link href="/register" style={{ cursor: 'pointer' }} >
          <span>
            GET STARTED <img src="/images/Home/arrow-1.png" />{" "}
          </span>
          </Link>
        </div>
       <div className={styles.peopleImageSliderCover}>
        {step === 0 && (
          <div className={styles.peopleImageSlider}>
            <div className={styles.peopleCardUmbrella}>
              <div className={styles.peopleCard}>
                <img src="/images/Home/people-1.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>

              <div className={styles.peopleCard}>
                <img src="/images/Home/people-2.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.peopleSliderArrow}>
              <div className={styles.actionSliderGroup}>
                <div className={[styles.actionSlider, styles.active].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
              </div>
              <div className={styles.peopleSliderArrowCoverGroup}>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(4)}
                >
                  <img src="/images/Home/left.png" alt="" />
                </div>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(1)}
                >
                  <img src="/images/Home/right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 &&  (
          <div className={styles.peopleImageSlider}>
            <div className={styles.peopleCardUmbrella}>
              <div className={styles.peopleCard}>
                <img src="/images/Home/people-2.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>

              <div className={styles.peopleCard}>
                <img src="/images/Home/people-3.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.peopleSliderArrow}>
              <div className={styles.actionSliderGroup}>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider, styles.active].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
              </div>
              <div className={styles.peopleSliderArrowCoverGroup}>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(0)}
                >
                  <img src="/images/Home/left.png" alt="" />
                </div>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(2)}
                >
                  <img src="/images/Home/right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 &&  (
          <div className={styles.peopleImageSlider}>
            <div className={styles.peopleCardUmbrella}>
              <div className={styles.peopleCard}>
                <img src="/images/Home/people-3.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>

              <div className={styles.peopleCard}>
                <img src="/images/Home/people-4.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.peopleSliderArrow}>
              <div className={styles.actionSliderGroup}>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider, styles.active].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
              </div>
              <div className={styles.peopleSliderArrowCoverGroup}>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(1)}
                >
                  <img src="/images/Home/left.png" alt="" />
                </div>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(3)}
                >
                  <img src="/images/Home/right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 &&  (
          <div className={styles.peopleImageSlider}>
            <div className={styles.peopleCardUmbrella}>
              <div className={styles.peopleCard}>
                <img src="/images/Home/people-4.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>

              <div className={styles.peopleCard}>
                <img src="/images/Home/people-5.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.peopleSliderArrow}>
              <div className={styles.actionSliderGroup}>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider, styles.active].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
              </div>
              <div className={styles.peopleSliderArrowCoverGroup}>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(2)}
                >
                  <img src="/images/Home/left.png" alt="" />
                </div>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(4)}
                >
                  <img src="/images/Home/right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 &&  (
          <div className={styles.peopleImageSlider}>
            <div className={styles.peopleCardUmbrella}>
              <div className={styles.peopleCard}>
                <img src="/images/Home/people-5.png" alt="" className={styles.img1} />
                <div className={styles.peopleCardItem1}>
                  <div className={styles.apostCover}>
                    <img src="/images/Home/apostry.png" alt="" />
                  </div>
                </div>
                <div className={styles.peopleCardItemDesc}>
                  <p>
                    Consequat elementum est quam purus, massa. Mauris adipiscing
                    ac massa risus tempus ut lacinia nisl. Imperdiet consectetur
                    ac egestas nunc eget nunc.{" "}
                  </p>
                  <div className={styles.peopleCardItemDescLover}>
                    <h2>Akinola Timothy</h2>
                    <h3>Fashion Designer</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.peopleSliderArrow}>
              <div className={styles.actionSliderGroup}>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider].join(" ")}></div>
                <div className={[styles.actionSlider, styles.active].join(" ")}></div>
              </div>
              <div className={styles.peopleSliderArrowCoverGroup}>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(3)}
                >
                  <img src="/images/Home/left.png" alt="" />
                </div>
                <div
                  className={styles.peopleSliderArrowCover}
                  onClick={() => setStep(0)}
                >
                  <img src="/images/Home/right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
