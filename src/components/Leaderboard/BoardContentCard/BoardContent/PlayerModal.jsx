import { useContext, useState } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"
import Modal from "../../../UI/Modal"
import profilePic from '../../../../assets/playerIcon/icon1.png'
import { motion, AnimatePresence } from 'framer-motion'


const PlayerModal = () => {
    const { selectedPlayer: player, isExpanded, onExpandModal, onCancelModal, isModalVisible } = useContext(LeaderboardContext)
    let arrow;

    if (isExpanded) {
        arrow = <span>&#9664;</span>
    } else {
        arrow = <span>&#9654;</span>
    }

    return <AnimatePresence mode='wait'>
        {isModalVisible && <motion.div
            key='modal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Modal onClick={() => onCancelModal()} className='top-[calc(50%-200px)] left-[calc(50%-165px)]'>
                <motion.div
                    className="flex"
                    animate={isExpanded ? { x: -300 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex">
                        <div className="w-[300px] h-[400px] bg-dark-black border-gray-800 border-[2px] p-5 grid grid-rows-2">
                            <div className="bg-cover" style={{ backgroundImage: `url(${profilePic})` }} />
                            <div className="bg-[#050D1680] p-5 rounded-md grid grid-rows-6 tracking-wide">
                                <p className="text-xl font-[700]">{player.name}</p>
                                <p className="text-sm my-auto">- Commander & Chief -</p>
                                <p className="text-sm my-auto row-start-3">Level: {player.level}</p>
                                <p className="text-xl my-auto mt-3 font-[700] row-start-5 row-span-2 tracking-wider">TID:#{player.tid}</p>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isExpanded && <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '600px' }}
                                exit={{ width: 0 }}
                                className='w-[600px] h-[400px] bg-dark-black'>
                                invisible
                            </motion.div>}
                        </AnimatePresence>
                    </div>
                    <motion.button
                        onClick={() => onExpandModal()}
                        className="h-[400px] w-[25px] bg-yellow-600"
                        whileHover={{
                            width: '30px'
                        }}
                    >
                        {arrow}
                    </motion.button>
                </motion.div>
            </Modal>
        </motion.div >}
    </AnimatePresence >

}

export default PlayerModal