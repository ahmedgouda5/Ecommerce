import style from './Loading.module.css';

export default function Loading() {
  return (
    <div className={`${style.preloader} flex justify-center mx-auto p-5 flex-col`}>
      <div>
        <svg
          aria-label="Shopping cart line animation"
          className={style.cart}
          height="128px"
          role="img"
          viewBox="0 0 128 128"
          width="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
            <g className={style.cart__track} stroke="hsla(0,10%,10%,0.1)">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </g>
            <g className={style.cart__lines} stroke="currentColor">
              <polyline
                className={style.cart__top}
                points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                strokeDasharray="338 338"
                strokeDashoffset="-338"
              />
              <g className={style.cart__wheel1} transform="rotate(-90,43,111)">
                <circle
                  className={style.cart__wheel_stroke}
                  cx="43"
                  cy="111"
                  r="13"
                  strokeDasharray="81.68 81.68"
                  strokeDashoffset="81.68"
                />
              </g>
              <g className={style.cart__wheel2} transform="rotate(90,102,111)">
                <circle
                  className={style.cart__wheel_stroke}
                  cx="102"
                  cy="111"
                  r="13"
                  strokeDasharray="81.68 81.68"
                  strokeDashoffset="81.68"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <p className="text-lg">Loading...</p>
        <p className="text-sm">Please wait while we fetch the data.</p> 

    </div>
    </div>
  );
}
