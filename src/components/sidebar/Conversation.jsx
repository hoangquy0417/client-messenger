const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-green-300 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
				<div className='flex gap-3 justify-between'>
					<p className='font-bold text-gray-200'>Qui Pham</p>
					<span className='text-xl'>🎃</span>
				</div>
		</div>
    </div>
    </>
    
  )
}

export default Conversation
