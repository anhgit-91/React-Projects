import React, { useState } from "react";
import { arrow_down, arrow_up } from "../assets";
import PropTypes from "prop-types";

const Questions = ({ title, info }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex flex-col justify-center items-center w-2/3">
                <div
                    key={title}
                    className="flex flex-col p-6 justify-center bg-bgInput/20  w-full "
                >
                    <div className="flex justify-between items-center">
                        <h4 className="font-satoshi font-bold text-white text-[22px] ">
                            {title}
                        </h4>
                        <button onClick={() => setOpen(!open)}>
                            <img
                                src={!open ? arrow_down : arrow_up}
                                alt="arrow"
                            />
                        </button>
                    </div>
                    <div className={`${open} ? 'block' : "hidden"`}>
                        {open && <p className="font-satoshi mt-5">{info}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

Questions.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
};
export default Questions;
