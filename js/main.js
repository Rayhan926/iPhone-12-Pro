$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sticky Nav Desktop Start
  let navOffsetTop = $(".top_nav_2_wrapper").offset().top;
  $(window).scroll(function () {
    let windowScrollTop = $(window).scrollTop();
    if (windowScrollTop >= navOffsetTop) {
      $(".top_nav_2_wrapper").addClass("fixed_top_nav_2");
    } else {
      $(".top_nav_2_wrapper").removeClass("fixed_top_nav_2");
    }
  });
  // Sticky Nav Desktop End

  const opacity_0_start = "top 65px";
  const opacity_0_end = "bottom 65px";

  // Iphone Compare Start
  $(".compare_switches_box button").click(function (e) {
    let dataVal = $(this).data("active");
    $(".iphone_12_pro_vs_12_pro_max_section")
      .removeClass("active_ultra_wide active_wide active_telephoto")
      .addClass(dataVal);

    set_btn_bg_positon(e);
  });
  function set_btn_bg_positon(e, prevPass) {
    let switch_wrap_rect = document
      .querySelector(".compare_switches_box")
      .getBoundingClientRect();
    let clientRect = prevPass ? e : e.currentTarget.getBoundingClientRect();

    let leftPos = clientRect.x - switch_wrap_rect.x;
    $(".white_button_bg").css({
      left: leftPos,
      width: clientRect.width,
    });
  }
  // Iphone Compare End

  // Top Section Video Animation Start
  let video_1 = ".top_video_container video";
  let video_1_gsap_timeline = gsap.timeline();
  video_1_gsap_timeline.pause();
  video_1_gsap_timeline
    .call(function () {
      $(video_1).trigger("play");
    })
    .to(video_1, {
      opacity: 1,
      delay: 0.2,
      duration: 0.3,
      ease: Power0.easeInOut,
    })
    .to(".top_video_container", {
      duration: 2,
      y: 15,
      ease: Expo.easeInOut,
      delay: 1.6,
    })
    .to(
      video_1,
      {
        y: -35,
        duration: 2,
      },
      "-=2"
    )
    .to(
      ".top_title_box",
      {
        opacity: 1,
        duration: 0.3,
      },
      "-=0.4"
    )
    .to(
      ".top_title_box .black_overly_animation",
      {
        width: "0%",
        duration: 1.2,
        ease: Expo.easeInOut,
      },
      "-=1.2"
    )
    .to(video_1, {
      y: -100,
      duration: 0,
    })
    .to(".top_video_container", {
      y: 80,
      duration: 0,
    });
  document.getElementById("video_1").oncanplaythrough = function () {
    video_1_gsap_timeline.play();
  };

  gsap.to(".video_container_translate_box", {
    scrollTrigger: {
      trigger: ".video_container_translate_box",
      toggleActions: "restart pause reverse pause",
      start: "top 300px",
      end: "+=500",
      scrub: true,
    },
    y: -350,
    duration: 1,
    ease: Power0.easeInOut,
  });
  gsap.to(".top_title_box", {
    scrollTrigger: {
      trigger: ".top_title_box",
      toggleActions: "restart pause reverse pause",
      start: "top 50px",
      end: "bottom 60px",
      scrub: true,
    },
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: Power0.easeInOut,
  });
  // Top Section Video Animation End

  // First Paragraph Section Start
  gsap.to(".first_paragraph_section", {
    scrollTrigger: {
      trigger: ".first_paragraph_section",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      start: "top 85%",
      end: "top 70%",
    },
    opacity: 1,
    duration: 2,
    ease: Power0.easeInOut,
  });
  gsap.to(
    ".first_paragraph_section p, .first_paragraph_section .anchor_center",
    {
      scrollTrigger: {
        trigger:
          ".first_paragraph_section p, .first_paragraph_section .anchor_center",
        toggleActions: "restart pause reverse pause",
        scrub: true,
        start: opacity_0_start,
        end: opacity_0_end,
      },
      opacity: 0,
      duration: 2,
      ease: Power0.easeInOut,
    }
  );
  // First Paragraph Section End

  // Less Bezel More Screen Section Title Start
  // let less_bg_ov = ".less_bezel_more_screen_section .black_overly_animation";
  // gsap.to(less_bg_ov, {
  //   scrollTrigger: {
  //     trigger: ".less_bezel_more_screen_section .center_box",
  //     toggleActions: "restart pause reverse pause",
  //     scrub: true,
  //     start: "top 80%",
  //     end: "top 50%",
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(tl.progress, less_bg_ov, 135);
  //     },
  //   },
  //   duration: 1.5,
  //   ease: Power0.easeInOut,
  // });
  gsap.to(".less_bezel_more_screen_section .video_2_wrapper", {
    scrollTrigger: {
      trigger: ".less_bezel_more_screen_section .video_2_wrapper",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      start: "top bottom",
      end: "bottom top",
    },
    y: "-600px",
    duration: 0.5,
    ease: Power0.easeInOut,
  });

  gsap.to(".video_2_wrapper", {
    scrollTrigger: {
      trigger: ".video_2_wrapper",
      start: "top center",
      toggleActions: "restart pause reverse pause",
      onEnter: playVideo_2,
      onEnterBack: playVideo_2,
      onLeave: setVideoToStart_2,
      onLeaveBack: setVideoToStart_2,
    },
  });

  function playVideo_2(index, target) {
    $("#video_2").trigger("play");
  }
  function setVideoToStart_2() {
    document.querySelector("#video_2").currentTime = 0;
  }

  // Less Bezel More Screen Section Title End

  // Compare Golden Iphone Section Start
  gsap.to(".video_wrapper_3", {
    scrollTrigger: {
      trigger: ".compare_section",
      toggleActions: "restart pause reverse pause",
      start: "top 70%",
      onEnter: playVideo_3,
      onEnterBack: playVideo_3,
      onLeave: setVideoToStart_3,
      onLeaveBack: setVideoToStart_3,
    },
  });
  gsap.to(".video_wrapper_3", {
    scrollTrigger: {
      trigger: ".video_wrapper_3",
      toggleActions: "restart pause reverse pause",
      start: "top bottom",
      end: "bottom 50px",
      scrub: true,
    },
    y: "-400px",
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  gsap.to(".video_wrapper_3", {
    scrollTrigger: {
      trigger: ".video_wrapper_3",
      toggleActions: "restart pause reverse pause",
      start: "top -5%",
      end: "bottom 50%",
      scrub: true,
    },
    opacity: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });

  gsap.to(".compare_text_wrapper", {
    scrollTrigger: {
      trigger: ".compare_text_wrapper",
      toggleActions: "restart pause reverse pause",
      start: "top 70%",
      end: "top 55%",
      scrub: true,
    },
    opacity: 1,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  gsap.to(".compare_text_wrapper div", {
    scrollTrigger: {
      trigger: ".compare_text_wrapper",
      toggleActions: "restart pause reverse pause",
      start: "top 22%",
      end: "bottom 45px",
      scrub: true,
    },
    opacity: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });

  function setVideoToStart_3() {
    document.querySelector("#video_3").currentTime = 0;
  }
  function playVideo_3() {
    $("#video_3").trigger("play");
  }
  // Compare Golden Iphone Section End

  // Kicks Glass Section Start
  gsap.to(".kicks_glass_img_box", {
    scrollTrigger: {
      trigger: ".kicks_glass_img_box",
      start: "top bottom",
      end: "top 75%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  // gsap.to(".kicks_title .black_overly_animation", {
  //   scrollTrigger: {
  //     trigger: ".kicks_title",
  //     start: "top 60%",
  //     end: "bottom 45%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(
  //         tl.progress,
  //         ".kicks_title .black_overly_animation",
  //         135
  //       );
  //     },
  //   },
  //   duration: 0.5,
  //   ease: Power0.easeInOut,
  // });
  // gsap.to(".kick_glass_section .gradient_text .black_overly_animation", {
  //   scrollTrigger: {
  //     trigger: ".kick_glass_section .gradient_text",
  //     start: "bottom 75%",
  //     end: "bottom 60%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(
  //         tl.progress,
  //         ".kick_glass_section .gradient_text .black_overly_animation",
  //         45
  //       );
  //     },
  //   },
  //   duration: 0.5,
  //   ease: Power0.easeInOut,
  // });

  gsap.to(".kick_glass_section button", {
    scrollTrigger: {
      trigger: ".kick_glass_section button",
      start: "bottom 90%",
      end: "bottom 80%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  gsap.to(".kicks_bottom_gradient_box", {
    scrollTrigger: {
      trigger: ".kicks_bottom_gradient_box",
      start: "top 30%",
      end: "bottom 80px",
      scrub: true,
    },
    opacity: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  // Kicks Glass Section End

  // Water Resistant Start
  gsap.to(".water_resistent_section .water_splash_main_image_box", {
    scrollTrigger: {
      trigger: ".water_resistent_section .water_splash_main_image_box",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
    duration: 0.5,
    opacity: 1,
    ease: Power0.easeInOut,
  });
  gsap.to(".water_splash_2_box, .water_splash_3_box", {
    scrollTrigger: {
      trigger: ".water_splash_2_box, .water_splash_3_box",
      start: "top 80%",
      end: "top 3%",
      scrub: true,
    },
    top: "50px",
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  gsap.to(".water_resistent_section .content_wrapper", {
    scrollTrigger: {
      trigger: ".water_resistent_section .content_wrapper",
      start: "top 75%",
      end: "top 55%",
      scrub: true,
    },
    opacity: 1,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  gsap.to(".water_resistent_section .content_wrapper ._content", {
    scrollTrigger: {
      trigger: ".water_resistent_section .content_wrapper ._content",
      start: opacity_0_start,
      end: opacity_0_end,
      scrub: true,
    },
    opacity: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  // Water Resistant End

  // Finishing Touch Section Start
  gsap.to(".finishing_touch_section video", {
    scrollTrigger: {
      trigger: ".finishing_touch_section video",
      start: "top 90%",
      end: "bottom top",
      toggleActions: "restart pause reverse pause",
      onEnter: playVideo_4,
      onEnterBack: playVideo_4,
      onLeave: setVideoToStart_4,
      onLeaveBack: setVideoToStart_4,
    },
  });

  function playVideo_4() {
    $(".finishing_touch_section video").trigger("play");
  }
  function setVideoToStart_4() {
    document.querySelector(".finishing_touch_section video").currentTime = 0;
  }

  gsap.to(".finishing_touch_section h2", {
    scrollTrigger: {
      trigger: ".finishing_touch_section h2",
      start: "top 90%",
      end: "bottom 90%",
      scrub: true,
    },
    opacity: 1,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  gsap.to(".finishing_touch_section p", {
    scrollTrigger: {
      trigger: ".finishing_touch_section p",
      start: "top 100%",
      end: "bottom 100%",
      scrub: true,
    },
    y: 0,
    duration: 0.5,
    ease: Power0.easeInOut,
  });
  // Finishing Touch Section End

  // Grid Section Start
  // gsap.to(".grid_title_box .black_overly_animation", {
  //   scrollTrigger: {
  //     trigger: ".grid_title_box",
  //     start: "top 55%",
  //     end: "bottom 55%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(
  //         tl.progress,
  //         ".grid_title_box .black_overly_animation",
  //         135
  //       );
  //     },
  //   },
  //   duration: 0.5,
  //   ease: Power0.easeInOut,
  // });
  gsap.to(".grid_long_desc", {
    scrollTrigger: {
      trigger: ".grid_long_desc",
      start: "top 70%",
      end: "top 60%",
      scrub: true,
    },
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: Power0.easeInOut,
  });
  const boxes = gsap.utils.toArray(".c_w");
  boxes.forEach((box) => {
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        start: "top 83%",
        end: "bottom 60%",
        scrub: true,

        onUpdate: function (tl) {
          setGridBoxShadow(tl, box);
        },
        onEnter: function () {
          setDefaultBoxShadow(box);
        },
        onLeave: function () {
          setDefaultBoxShadow(box);
        },
        onEnterBack: function () {
          setDefaultBoxShadow(box);
        },
        onLeaveBack: function () {
          setDefaultBoxShadow(box);
        },
      },
    });
  });

  boxes.forEach((box) => {
    gsap.to(box.querySelector(".cell_content_box"), {
      scrollTrigger: {
        trigger: box,
        start: "top 85%",
        end: "bottom 65%",
        scrub: true,
      },
      opacity: 1,
    });
  });
  boxes.forEach((box) => {
    gsap.to(box.querySelector(".cell_content_box *"), {
      scrollTrigger: {
        trigger: box,
        start: opacity_0_start,
        end: opacity_0_end,
        scrub: true,
      },
      opacity: 0,
    });
  });

  const grid_btm_content = gsap.utils.toArray(".grid_btm_content");

  grid_btm_content.forEach((e) => {
    gsap.to(e, {
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
    });
  });

  gsap.to(".grid_section .text_wrapper", {
    scrollTrigger: {
      trigger: ".grid_section .text_wrapper",
      start: opacity_0_start,
      end: opacity_0_end,
      scrub: true,
    },
    opacity: 0,
  });
  // Grid Section End

  // Lider Section Start
  // let lidar_overly =
  //   ".lidar_scanner_section .title_wrapper .black_overly_animation";
  // gsap.to(lidar_overly, {
  //   scrollTrigger: {
  //     trigger: ".lidar_scanner_section .title_wrapper",
  //     start: "top 75%",
  //     end: "top 55%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(tl.progress, lidar_overly, 135);
  //     },
  //   },
  // });

  gsap.to(".video_wrapper_5", {
    scrollTrigger: {
      trigger: ".video_wrapper_5",
      start: "top 30%",
      end: "bottom 30%",
      // pin: true,
      scrub: true,

      onEnter: function () {
        document.querySelector(".video_wrapper_5 video").currentTime = 0;
        $(".video_wrapper_5 video").trigger("play");
      },
      onEnterBack: function () {
        document.querySelector(".video_wrapper_5 video").currentTime = 0;
        $(".video_wrapper_5 video").trigger("play");
      },
    },
  });
  // Lider Section End

  // Pro Camera Section Start
  // let pro_cam_overly = ".pro_camera_system_section .title_box .overly_1";
  // gsap.to(pro_cam_overly, {
  //   scrollTrigger: {
  //     trigger: ".pro_camera_system_section .title_box",
  //     start: "top 80%",
  //     end: "bottom 75%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(tl.progress, pro_cam_overly, 135);
  //     },
  //   },
  // });
  gsap.to(".pro_camera_system_section .big_bg_section", {
    scrollTrigger: {
      trigger: ".pro_camera_system_section .big_bg_section",
      start: "top bottom",
      end: "top 75%",
      scrub: true,
    },
    opacity: 1,
  });
  gsap.to(".pro_camera_system_section .pro_cam_bg_wrapper", {
    scrollTrigger: {
      trigger: ".pro_camera_system_section .pro_cam_bg_wrapper",
      start: "top 90%",
      end: "bottom top",
      scrub: true,
    },
    y: -550,
  });

  // Pro Camera Section End

  // Portrait Section Start
  function refrestAll() {
    let portraitAllTitle = gsap.utils.toArray(".portrait_sec_title");
    portraitAllTitle.forEach((e) => {
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 95%",
          end: "top 75%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
      });
    });
  }
  refrestAll();
  let portraitAllImages_for_scale = gsap.utils.toArray(
    ".portraits_section .portrait_and_landscape_img_box"
  );
  portraitAllImages_for_scale.forEach((e) => {
    // let endAnimation =
    //   (window.innerHeight - $(e).height()) / 2 + navOffsetTop + 50 + "px";
    let tlll = gsap.timeline();
    tlll
      .to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          end: `top 25%`,
          scrub: true,
        },
        scale: 0.8,
        opacity: 0.7,
      })
      .to(e, {
        scrollTrigger: {
          trigger: e.parentElement,
          end: "+=200",
          pin: true,
          scrub: true,
          onUpdate: function (tl) {
            let scale = 0.2 * tl.progress + 0.8;
            let opacity = 0.3 * tl.progress + 0.7;

            // if (tl.progress >= 1) {
            //   setTimeout(() => {
            //     refrestAll();
            //   }, 200);
            // }

            $(e).css({
              opacity: opacity,
              Transform: `scale(${scale})`,
            });
          },
        },
      })
      .to(e.parentElement.querySelector(".portrait_content_box p"), {
        scrollTrigger: {
          trigger: e.parentElement.querySelector(".portrait_content_box p"),
          start: "top 35%",
          end: "top 25%",
          scrub: true,
          onUpdate: function (tl) {
            let elm = e.parentElement.querySelector(".portrait_content_box p");
            if (elm) {
              elm.style.opacity = tl.progress;
              elm.style.transform = `translateY(${50 - tl.progress * 50}px)`;
            }
          },
        },
      })
      .to(e.parentElement.querySelector(".portrait_content_box button"), {
        scrollTrigger: {
          trigger: e.parentElement.querySelector(
            ".portrait_content_box button"
          ),
          start: "top 50%",
          end: "top 40%",
          scrub: true,
          onUpdate: function (tl) {
            let elm = e.parentElement.querySelector(
              ".portrait_content_box button"
            );
            if (elm) {
              elm.style.opacity = tl.progress;
              elm.style.transform = `translateY(${50 - tl.progress * 50}px)`;
            }
          },
        },
      });
  });

  let fff = gsap.utils.toArray(".portrait_sec_title");
  fff.forEach((e) => {
    gsap.to(e, {
      scrollTrigger: {
        trigger: e,
        start: "top 100%",
        end: "top 60%",
        scrub: true,

        onUpdate: function (tl) {
          if (tl.progress > 0) {
            e.style.opacity = tl.progress;
            e.style.transform = `translateY(${500 - tl.progress * 500}px)`;
          }
        },
      },
    });
  });
  // Portrait Section End

  // I phone 12 pro vs I phone 12 pro max Compare Start

  gsap.to(".snapshot_title", {
    scrollTrigger: {
      trigger: ".snapshot_title",
      start: "top 98%",
      end: "top 70%",
      scrub: true,
    },
    opacity: 1,
  });
  gsap.to(".phone_camera_img_box", {
    scrollTrigger: {
      trigger: ".phone_camera_img_box",
      start: "top 90%",
      end: "top 65%",
      scrub: true,
    },
    opacity: 1,
  });
  gsap.to(".phone_compare_content_box", {
    scrollTrigger: {
      trigger: ".phone_compare_content_box",
      start: "top 90%",
      end: "top 65%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
  });
  gsap.to(".all_lens_visible_box", {
    scrollTrigger: {
      trigger: ".phone_camera_img_box",
      start: "top 50%",
      end: "top 40%",
      scrub: true,
    },
    opacity: 0.3,
  });
  // I phone 12 pro vs I phone 12 pro max Compare End

  // Apple Pro Raw Start
  gsap.to(".proraw_section h2", {
    scrollTrigger: {
      trigger: ".proraw_section h2",
      start: "top 95%",
      end: "top 75%",
      scrub: true,
    },
    opacity: 1,
  });
  gsap.to(".proraw_section p", {
    scrollTrigger: {
      trigger: ".proraw_section p",
      start: "top 95%",
      end: "top 75%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
  });
  // Apple Pro Raw End

  // Visison Recording Start
  // let vision_overly = ".vision_recording_section .black_overly_animation";
  // gsap.to(vision_overly, {
  //   scrollTrigger: {
  //     trigger: vision_overly,
  //     start: "top 75%",
  //     end: "top 45%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(tl.progress, vision_overly, 135);
  //     },
  //   },
  // });

  gsap.to(".girl_video_gap", {
    scrollTrigger: {
      trigger: ".girl_video_gap",
      start: "top 40%",
      end: "top top",
      scrub: true,
      onUpdate: function (tl) {
        $(".girl_video")
          .css({
            opacity: tl.progress,
          })
          .find("video")
          .trigger("play");
      },
    },
  });
  gsap.to(".girl_video_gap", {
    scrollTrigger: {
      trigger: ".girl_video_gap",
      start: "bottom 30px",
      end: "bottom bottom",
      scrub: true,
      onUpdate: function (tl) {
        $(".girl_video").css({
          opacity: 1 - tl.progress,
        });
      },
    },
  });

  // let allInArray_2 = gsap.utils.toArray(".op_0_to_1_y_2");
  // allInArray_2.forEach((e) => {
  //   gsap.to(e, {
  //     scrollTrigger: {
  //       trigger: e,
  //       start: "top 95%",
  //       end: "top 80%",
  //       scrub: true,
  //       markers: true,
  //     },
  //     opacity: 1,
  //     y: 0,
  //   });
  // });
  // Visison Recording End

  // Movie Night
  gsap.to(".movie_night .title_box h2", {
    scrollTrigger: {
      trigger: ".movie_night .title_box h2",
      start: "top 50%",
      end: "top 40%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
  });
  gsap.to(".movie_night_video_gap", {
    scrollTrigger: {
      trigger: ".movie_night_video_gap",
      start: "top 40%",
      end: "top top",
      scrub: true,
      onUpdate: function (tl) {
        $(".movie_night_video_wrapper")
          .css({
            opacity: tl.progress,
          })
          .find("video")
          .trigger("play");
      },
    },
  });
  gsap.to(".movie_night_video_gap", {
    scrollTrigger: {
      trigger: ".movie_night_video_gap",
      start: "bottom 30px",
      end: "bottom bottom",
      scrub: true,
      onUpdate: function (tl) {
        $(".movie_night_video_wrapper").css({
          opacity: 1 - tl.progress,
        });
      },
    },
  });

  // Movie Night End

  // True Dept Camera Section Start
  // let true_dept_overly = ".true_dept_camera_section .black_overly_animation";
  // gsap.to(true_dept_overly, {
  //   scrollTrigger: {
  //     trigger: true_dept_overly,
  //     start: "top 80%",
  //     end: "top 50%",
  //     scrub: true,
  //     onUpdate: function (tl) {
  //       setBackgroundOverlyPosition(tl.progress, true_dept_overly, 135);
  //     },
  //   },
  // });
  gsap.to(".true_dept_camera_section .img_box", {
    scrollTrigger: {
      trigger: ".true_dept_camera_section .img_box",
      start: "top 90%",
      end: "top 70%",
      scrub: true,
    },
    opacity: 1,
  });
  gsap.to(".true_dept_camera_section .img_box", {
    scrollTrigger: {
      trigger: ".true_dept_camera_section .img_box",
      start: "top 60%",
      end: "top top",
      scrub: true,
    },
    y: -250,
  });

  // True Dept Camera Section End

  // Super Ratina Section Start
  let ratina_video = ".super_ratina_section .big_landscape_wrapper";
  gsap.to(ratina_video, {
    scrollTrigger: {
      trigger: ratina_video,
      start: "top 45%",
      end: "top 0%",
      onEnter: play_ratina_video,
      onEnterBack: play_ratina_video,
      onLeaveBack: play_ratina_video,
      markers: true,
    },
  });

  function play_ratina_video() {
    $(ratina_video + " video").trigger("play");
  }
  function reset_ratina_video() {
    $(ratina_video + " video").attr("currentTime", 0);
  }
  // Super Ratina Section End

  function c(e) {
    console.log(e);
  }
  function setBackgroundOverlyPosition(percentageVal, elm, rotateVal) {
    let darkerVal = percentageVal * 135;
    let transVal = darkerVal - 35;
    $(elm).css({
      background: `linear-gradient(${rotateVal}deg, transparent ${transVal}%, #000 ${darkerVal}%)`,
    });
  }

  function setGridBoxShadow(percentageVal, elm) {
    let getShadowInPixel = (percentageVal.progress * 100) / 2;
    if (getShadowInPixel < 25) {
      $(elm).css({
        boxShadow: `0 0 ${getShadowInPixel + 8}px rgba(57,155,235,0.329412)`,
      });
    } else {
      let getDiffrence = 25 - (getShadowInPixel - 25) + 8;
      $(elm).css({
        boxShadow: `0 0 ${getDiffrence}px rgba(57,155,235,0.329412)`,
      });
    }
  }

  function setDefaultBoxShadow(elm) {
    $(elm).css({
      boxShadow: "0 0 8px rgba(97, 182, 205, 0.5)",
    });
  }

  // $(document).dblclick(function () {
  //   gsap.to(".top_nav_1 ul li", {
  //     scale: 0.2,
  //     opacity: 0,
  //     duration: 0.18,
  //     ease: Power0.easeInOut,
  //     stagger: -0.08,
  //     loop: true,
  //   });
  // });

  // function setDefaultBoxShadow() {}
  set_btn_bg_positon(
    document.querySelector(".wide_btn").getBoundingClientRect(),
    true
  );

  // Reusabel Gsap Start

  let allBlackOverly = gsap.utils.toArray(".each_black_overly");
  allBlackOverly.forEach((e) => {
    let start = $(e).attr("data-start") || "top 80%";
    let end = $(e).attr("data-end") || "top 50%";
    let rotate = Number($(e).attr("data-rotate") || 135);
    gsap.to(e, {
      scrollTrigger: {
        trigger: e,
        start: start,
        end: end,
        scrub: true,
        onUpdate: function (tl) {
          setBackgroundOverlyPosition(tl.progress, e, rotate);
        },
      },
    });
  });

  let allInArrayop_0_1 = gsap.utils.toArray(".op_0_to_1");
  allInArrayop_0_1.forEach((e) => {
    gsap.to(e, {
      scrollTrigger: {
        trigger: e,
        start: "top 95%",
        end: "top 80%",
        scrub: true,
      },
      opacity: 1,
    });
  });

  let allInArray = gsap.utils.toArray(".op_0_to_1_y");
  allInArray.forEach((e) => {
    gsap.to(e, {
      scrollTrigger: {
        trigger: e,
        start: "top 95%",
        end: "top 80%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
    });
  });

  // Reusabel Gsap End
  // XXXXXXXXXXXXX END JQUERY XXXXXXXXXXX
});
