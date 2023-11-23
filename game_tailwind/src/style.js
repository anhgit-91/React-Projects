const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2:
        "font-satoshi font-bold xs:text-[48px] text-[40px] text-white xs:leading-[60.8px] leading-[66.8px] w-full",
    btnText: "font-satoshi font-normal text-white text-[18px] leading-[30.8px]",
    paragraph:
        "font-satoshi font-normal text-white text-[16px] leading-[30.8px]",
    paragraph2:
        "font-satoshi font-normal text-white text-[14px] leading-[28.8px]",
    paragraph3:
        "font-satoshi font-normal text-white text-[12px] leading-[24.8px]",

    flexCenter: "flex justify-center items-center ",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-10 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
