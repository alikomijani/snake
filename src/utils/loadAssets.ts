import apple from "../assets/apple.png";
import head_up from "../assets/head_up.png";
import head_down from "../assets/head_down.png";
import head_right from "../assets/head_right.png";
import head_left from "../assets/head_left.png";

import tail_up from "../assets/tail_up.png";
import tail_down from "../assets/tail_down.png";
import tail_right from "../assets/tail_right.png";
import tail_left from "../assets/tail_left.png";

import body_bottom_left from "../assets/body_bottomleft.png";
import body_bottom_right from "../assets/body_bottomright.png";
import body_top_left from "../assets/body_topleft.png";
import body_top_right from "../assets/body_topright.png";
import body_vertical from "../assets/body_vertical.png";
import body_horizontal from "../assets/body_horizontal.png";

// body
export const bodyBottomLeftImage = new Image();
bodyBottomLeftImage.src = body_bottom_left;

export const bodyBottomRightImage = new Image();
bodyBottomRightImage.src = body_bottom_right;

export const bodyTopLeftImage = new Image();
bodyTopLeftImage.src = body_top_left;

export const bodyTopRightImage = new Image();
bodyTopRightImage.src = body_top_right;

export const bodyVerticalImage = new Image();
bodyVerticalImage.src = body_vertical;

export const bodyHorizontalImage = new Image();
bodyHorizontalImage.src = body_horizontal;

// Food
const FoodImage = new Image();
FoodImage.src = apple;

// head

const HeadUpImage = new Image();
HeadUpImage.src = head_up;

const HeadDownImage = new Image();
HeadDownImage.src = head_down;

const HeadLeftImage = new Image();
HeadLeftImage.src = head_left;

const HeadRightImage = new Image();
HeadRightImage.src = head_right;

//tail

const tailUpImage = new Image();
tailUpImage.src = tail_up;

const tailDownImage = new Image();
tailDownImage.src = tail_down;

const tailLeftImage = new Image();
tailLeftImage.src = tail_left;

const tailRightImage = new Image();
tailRightImage.src = tail_right;

export {
  FoodImage,
  HeadLeftImage,
  HeadRightImage,
  HeadUpImage,
  HeadDownImage,
  tailDownImage,
  tailLeftImage,
  tailRightImage,
  tailUpImage,
};
