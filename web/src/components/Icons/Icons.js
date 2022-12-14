import { navigate, routes } from '@redwoodjs/router'

export const ActivityIcon = ({ className, disabled }) => {
  let path = window.location.pathname
  path = path.split('/').pop()
  return (
    <button
      className={`m-auto mx-auto flex flex-col justify-between text-center ${
        !disabled ? 'hover:text-blue-700' : ''
      }`}
      onClick={() => navigate(routes.activities())}
      disabled={disabled}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={13}
        className={`${className} mx-auto`}
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 499.996 499.996"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M427.56,46.592h-75.4c-3.444-15.636-17.532-27.36-34.356-27.36h-37.38C275.664,7.504,264.444,0,251.668,0
			s-23.996,7.504-28.756,19.232h-37.848c-16.828,0-30.912,11.728-34.356,27.36H75.776c-19.4,0-36.848,16.272-36.848,35.668v382.404
			c0,19.4,17.448,35.332,36.848,35.332h351.78c19.4,0,33.512-15.936,33.512-35.332V82.26
			C461.072,62.864,446.956,46.592,427.56,46.592z M251.668,15.644c8.62,0,15.636,7.012,15.636,15.636s-7.016,15.636-15.636,15.636
			c-8.624,0-15.636-7.012-15.636-15.636S243.044,15.644,251.668,15.644z M81.924,464.824V73.952h66.448V86.66
			c0,2.16,3.256,2.928,5.416,2.928h195.284c2.16,0,2.552-0.768,2.552-2.928V73.952h66.448v390.872H81.924z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M381.056,183.396H224.384c-4.316,0-7.816,3.496-7.816,7.816s3.5,7.82,7.816,7.82h156.672c4.316,0,7.82-3.504,7.82-7.82
			C388.876,186.896,385.372,183.396,381.056,183.396z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M270.96,245.936h-46.576c-4.316,0-7.816,3.5-7.816,7.816c0,4.32,3.5,7.82,7.816,7.82h46.576c4.316,0,7.816-3.5,7.816-7.82
			C278.776,249.436,275.276,245.936,270.96,245.936z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M381.052,245.936h-74.916c-4.316,0-7.816,3.5-7.816,7.816c0,4.32,3.5,7.82,7.816,7.82h74.92c4.316,0,7.82-3.5,7.816-7.82
			C388.872,249.436,385.368,245.936,381.052,245.936z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M381.056,371.012H334.48c-4.316,0-7.816,3.5-7.816,7.816c0,4.32,3.5,7.82,7.816,7.82h46.576c4.316,0,7.82-3.5,7.82-7.82
			C388.876,374.512,385.372,371.012,381.056,371.012z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M299.3,371.012h-74.916c-4.316,0-7.816,3.5-7.816,7.816c0,4.32,3.5,7.82,7.816,7.82H299.3c4.316,0,7.816-3.5,7.816-7.82
			C307.116,374.512,303.616,371.012,299.3,371.012z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M381.056,308.472H224.384c-4.316,0-7.816,3.5-7.816,7.816c0,4.32,3.5,7.82,7.816,7.82h156.672c4.316,0,7.82-3.5,7.82-7.82
			C388.876,311.972,385.372,308.472,381.056,308.472z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M194.616,161.672c-3.052-3.052-8-3.052-11.052,0l-29.844,29.84l-13.796-13.796c-3.052-3.052-8-3.052-11.052,0
			c-3.056,3.056-3.056,8.004,0,11.056l19.324,19.324c1.524,1.528,3.524,2.292,5.524,2.292c2.004,0,4.004-0.764,5.528-2.292
			l35.368-35.368C197.672,169.672,197.672,164.728,194.616,161.672z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M194.616,224c-3.052-3.052-8-3.052-11.052,0l-29.844,29.84l-13.796-13.796c-3.052-3.052-8-3.052-11.052,0
			c-3.056,3.056-3.056,8,0,11.056l19.324,19.324c1.524,1.528,3.524,2.288,5.524,2.288c2.004,0,4.004-0.764,5.528-2.288
			l35.368-35.368C197.672,232,197.672,227.052,194.616,224z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M194.616,286.464c-3.052-3.056-8-3.056-11.052,0l-29.844,29.84l-13.796-13.796c-3.052-3.056-8-3.056-11.052,0
			c-3.056,3.056-3.056,8,0,11.056l19.324,19.324c1.524,1.524,3.524,2.288,5.524,2.288c2.004,0,4.004-0.76,5.528-2.288l35.368-35.368
			C197.672,294.464,197.672,289.516,194.616,286.464z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M194.616,349.064c-3.052-3.052-8-3.052-11.052,0l-29.844,29.84l-13.796-13.796c-3.052-3.052-8-3.052-11.052,0
			c-3.056,3.056-3.056,8.004,0,11.056l19.324,19.324c1.524,1.528,3.524,2.292,5.524,2.292c2.004,0,4.004-0.764,5.528-2.292
			l35.368-35.368C197.672,357.064,197.672,352.12,194.616,349.064z"
            />
          </g>
        </g>
      </svg>
      {path == '' ? (
        <p className="w-full text-center text-xl font-bold">Activities</p>
      ) : null}
    </button>
  )
}

export const CuisineIcon = ({ className, disabled }) => {
  let path = window.location.pathname
  path = path.split('/').pop()
  return (
    <button
      className={`m-auto mx-auto flex flex-col justify-between text-center ${
        !disabled ? 'hover:text-blue-700' : ''
      }`}
      onClick={() => navigate(routes.cuisine())}
      disabled={disabled}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={13}
        className={`${className} mx-auto`}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 -10 530 530"
        xmlSpace="preserve"
      >
        <g>
          <path d="M391.5,0c-4.142,0-7.5,3.358-7.5,7.5v120c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5V7.5c0-4.142-3.358-7.5-7.5-7.5   S352,3.358,352,7.5v120c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5V7.5c0-4.142-3.358-7.5-7.5-7.5S320,3.358,320,7.5v120   c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5V7.5c0-4.142-3.358-7.5-7.5-7.5S288,3.358,288,7.5v160   c0,12.958,10.542,23.5,23.5,23.5c4.687,0,8.5,3.813,8.5,8.5v73.409c-13.759,3.374-24,15.806-24,30.591v160   c0,26.191,21.309,47.5,47.5,47.5s47.5-21.309,47.5-47.5v-160c0-14.785-10.241-27.216-24-30.591V199.5c0-4.687,3.813-8.5,8.5-8.5   c12.958,0,23.5-10.542,23.5-23.5V7.5C399,3.358,395.642,0,391.5,0z M376,303.5v160c0,17.92-14.58,32.5-32.5,32.5   S311,481.42,311,463.5v-160c0-9.098,7.402-16.5,16.5-16.5h32C368.598,287,376,294.402,376,303.5z M375.5,176   c-12.958,0-23.5,10.542-23.5,23.5V272h-17v-72.5c0-12.958-10.542-23.5-23.5-23.5c-4.687,0-8.5-3.813-8.5-8.5v-18.097   c2.638,1.027,5.503,1.597,8.5,1.597c6.177,0,11.801-2.399,16-6.31c4.199,3.911,9.823,6.31,16,6.31s11.801-2.399,16-6.31   c4.199,3.911,9.823,6.31,16,6.31c2.997,0,5.862-0.57,8.5-1.597V167.5C384,172.187,380.187,176,375.5,176z" />
          <path d="M183.5,0c-20.479,0-38.826,11.623-51.663,32.728C118.86,54.064,112,84.07,112,119.5c0,25.652,13.894,49.464,36.26,62.144   c7.242,4.105,11.74,12.106,11.74,20.88v70.385c-13.759,3.374-24,15.806-24,30.591v160c0,26.191,21.309,47.5,47.5,47.5   s47.5-21.309,47.5-47.5v-160c0-14.785-10.241-27.216-24-30.591v-70.385c0-8.774,4.499-16.775,11.74-20.88   C241.106,168.964,255,145.152,255,119.5c0-35.43-6.86-65.436-19.837-86.772C222.326,11.623,203.979,0,183.5,0z M216,303.5v160   c0,17.92-14.58,32.5-32.5,32.5S151,481.42,151,463.5v-160c0-9.098,7.402-16.5,16.5-16.5h32C208.598,287,216,294.402,216,303.5z    M211.343,168.595C199.412,175.359,192,188.36,192,202.524V272h-17v-69.476c0-14.164-7.412-27.165-19.342-33.929   C137.981,158.574,127,139.762,127,119.5c0-32.68,6.104-59.99,17.653-78.978C154.809,23.826,168.242,15,183.5,15   s28.691,8.826,38.847,25.522C233.896,59.51,240,86.82,240,119.5C240,139.762,229.019,158.574,211.343,168.595z" />
          <path d="M191.5,304c-4.142,0-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16   C199,307.358,195.642,304,191.5,304z" />
          <path d="M191.5,352c-4.142,0-7.5,3.358-7.5,7.5v72c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-72   C199,355.358,195.642,352,191.5,352z" />
          <path d="M351.5,304c-4.142,0-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16   C359,307.358,355.642,304,351.5,304z" />
          <path d="M351.5,352c-4.142,0-7.5,3.358-7.5,7.5v72c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-72   C359,355.358,355.642,352,351.5,352z" />
        </g>
      </svg>
      {path == '' ? (
        <p className="w-full text-center text-xl font-bold">Cuisine</p>
      ) : null}
    </button>
  )
}

// className="group mx-auto flex flex-col justify-between text-center hover:text-blue-700"

export const HomeIcon = ({ className, disabled }) => {
  let path = window.location.pathname
  path = path.split('/').pop()
  return (
    <button
      onClick={() => navigate(routes.accomodation())}
      disabled={disabled}
      className={`m-auto mx-auto flex flex-col justify-between text-center ${
        !disabled ? 'hover:text-blue-700' : ''
      }`}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} mx-auto`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      {path == '' ? (
        <p className="w-full text-center text-xl font-bold">Accomodation</p>
      ) : null}
    </button>
  )
}

export const CarIcon = ({ className, disabled }) => {
  let path = window.location.pathname
  path = path.split('/').pop()
  return (
    <button
      onClick={() => navigate(routes.transportation())}
      disabled={disabled}
      className={`m-auto mx-auto flex flex-col justify-between text-center ${
        !disabled ? 'hover:text-blue-700' : ''
      }`}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={0.85}
        className={`${className} mx-auto`}
        viewBox="-1 -1 18 18"
      >
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
      </svg>
      {path == '' ? (
        <p className="w-full text-center text-xl font-bold">Transportation</p>
      ) : null}
    </button>
  )
}

export const TicketIcon = ({ className, disabled }) => {
  let path = window.location.pathname
  path = path.split('/').pop()
  return (
    <button
      className={`m-auto mx-auto flex flex-col justify-between text-center ${
        !disabled ? 'hover:text-blue-700' : ''
      }`}
      onClick={() => navigate(routes.packages())}
      disabled={disabled}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} mx-auto`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        />
      </svg>
      {path == '' ? (
        <p className="w-full text-center text-xl font-bold">Packages</p>
      ) : null}
    </button>
  )
}

export const FAQIcon = ({ className, disabled }) => {
  let path = window.location.pathname
  path = path.split('/').pop()
  return (
    <button
      className={`m-auto mx-auto flex flex-col justify-between text-center ${
        !disabled ? 'hover:text-blue-700' : ''
      }`}
      onClick={() => navigate(routes.faq())}
      disabled={disabled}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} mx-auto`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
      {path == '' ? (
        <p className="w-full text-center text-xl font-bold">Help</p>
      ) : null}
    </button>
  )
}
