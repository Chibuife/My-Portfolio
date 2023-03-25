import { BallCanvas } from "./canvas"
import { SectionWapper } from "../hoc"
import { technologies } from "../constants"
const Tech = () => {
  console.log(technologies)
  const mem = navigator.deviceMemory
  {
    return (
      mem < 2 ?
        <div
          className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h28" key={technology.name}>
              <img src={technology.icon} />
            </div>
          ))
          }
        </div>
        :
        <div
          className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
          }
        </div>

    )
  }
}

export default Tech