"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import {DATA} from "@/data/resume";
import Markdown from "react-markdown";
import styles from "./css/timeline.module.css"

const BLUR_FADE_DELAY = 0.04;

const HeroSection = () => {
    return (
        <section className="w-4/5 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-indigo-400">
              Mayuresh Gramopadhye
            </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Fullstack Developer",
                                1000,
                                "PHP, Laravel, React, Node.js",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Software Engineer at Tech9
                    </p>
                    <div>
                        <Link
                            href="mailto:mayuresh3@gmail.com"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1hoRCch4S99boYrlq2B7tzy4jT060aT4K/view?usp=drive_link"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 mt-3"
                        >
              <span className="block rounded-full px-5 py-2">
                Download CV
              </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/mayuresh.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            width={400}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
            <div className={"w-auto"}>
                <section id="about">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">About</h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <Markdown
                            className="prose max-w-full text-pretty font-sans sm:text-1xl text-muted-foreground dark:prose-invert">
                            {DATA.summary}
                        </Markdown>
                    </BlurFade>
                </section>
            </div>
            <div className={"w-auto pt-3"}>
                <section id="work">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">Work
                                Experience</h1>
                        </BlurFade>
                        <div className={styles.timelineContainer}>
                            <div className={styles.timelineLine}></div>
                            {DATA.work.map((work, id) => (
                                <div
                                    key={id}
                                    className={`${styles.timelineItem} ${id % 2 === 0 ? styles.left : styles.right}`}
                                >
                                    <span className={styles.point}></span>
                                    <div className={styles.content}>
                                        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-indigo-400 !important">{work.title}</h3>
                                        <h4>{work.company}</h4>
                                        <span>{work.start} - {work.end}</span>
                                    </div>
                                    <span className={styles.connector}></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default HeroSection;
