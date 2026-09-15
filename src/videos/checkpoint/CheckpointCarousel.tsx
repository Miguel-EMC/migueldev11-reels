import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { emcodeTheme } from "../../themes/emcode";
import { EmcodeCarouselBackground, EmcodeCarouselFrame } from "../carousel/EmcodeCarouselLayout";
import { SlideTransition, SLIDE_DURATION } from "./CheckpointAnim";
import { Slide1Hook } from "./slides/Slide1Hook";
import { Slide2Problem } from "./slides/Slide2Problem";
import { Slide3Solution } from "./slides/Slide3Solution";
import { Slide4HowItWorks } from "./slides/Slide4HowItWorks";
import { Slide5WhyGemini } from "./slides/Slide5WhyGemini";
import { Slide6WhoFor } from "./slides/Slide6WhoFor";
import { Slide7CTA } from "./slides/Slide7CTA";

const SLIDES: Array<{ Component: React.FC; glowPosition: "top" | "center" | "bottom" }> = [
  { Component: Slide1Hook, glowPosition: "top" },
  { Component: Slide2Problem, glowPosition: "center" },
  { Component: Slide3Solution, glowPosition: "center" },
  { Component: Slide4HowItWorks, glowPosition: "center" },
  { Component: Slide5WhyGemini, glowPosition: "center" },
  { Component: Slide6WhoFor, glowPosition: "center" },
  { Component: Slide7CTA, glowPosition: "bottom" },
];

export const CHECKPOINT_TOTAL_FRAMES = SLIDES.length * SLIDE_DURATION;

export const CheckpointCarousel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12" }}>
      {SLIDES.map(({ Component, glowPosition }, i) => (
        <Sequence key={i} from={i * SLIDE_DURATION} durationInFrames={SLIDE_DURATION}>
          <SlideTransition>
            <EmcodeCarouselBackground accentColor={emcodeTheme.cyan} glowPosition={glowPosition} />
            <EmcodeCarouselFrame
              currentSlide={i + 1}
              totalSlides={SLIDES.length}
              accentColor={emcodeTheme.cyan}
            >
              <Component />
            </EmcodeCarouselFrame>
          </SlideTransition>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
