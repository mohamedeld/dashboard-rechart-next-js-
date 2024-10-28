import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <div className="flex justify-between items-center py-[30px] px-[20px]">
      <h1 className="text-4xl">Dashboard</h1>
      <div className="flex justify-between items-center">
        <HeaderItem count={12} icon={"K+"} text={"Creating and submitting your EOI"}/>
        <HeaderItem count={81} icon={"%"} text={"Approval of new requests"}/>
      </div>
    </div>
  )
}

export default Header