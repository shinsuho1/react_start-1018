import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Pop = forwardRef(({ children }, ref) => {
    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true)
        }
    })

    return (
        <>
            <AnimatePresence>
                {
                    Open &&
                    <motion.aside className="pop"
                        initial={{ opacity: 0, scale: 0, rotate: 120 }} animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } }} exit={{ opacity: 0, scale: 0, x: 5000, transition: { duration: 0.5, delay: 0.3 } }}>
                        <motion.div className="con" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>{children}</motion.div>
                        <motion.span className="close" onClick={() => setOpen(false)} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}>close</motion.span>
                    </motion.aside>
                }
            </AnimatePresence>
        </>
    )

})


// function Pop({ setOpen, children }) {

//     return (
// <aside className="pop">
//     <div className="con">{children}</div>
//     <span className="close" onClick={() => setOpen(false)}>close</span>
// </aside>
//     )
// }

export default Pop;

/*
forwardRef의 흐름
1. pop의 화살표함수를 forwardRef로 전달된다
2. forwardRef로 전달되는 화살표함수의 두번째 파라미터로 ref가 전달되고, 이것을 Gaellery에서 Pop컴포넌트와 연결된다 (갤러리의 Pop컴포넌트도 ref가 선언되어야함)
3. forwardRef안에있는 useImperativeHandle함수를 호출하여 부모인 갤러리가 해당 메서드를 사용할 수 있게 됨
4. forwardRef안에 리턴값이 부모컴포넌트로 반환되며, 부모컴포넌트에서는 자식컴포넌트 자체를 참조할 수 있게 된다
*/