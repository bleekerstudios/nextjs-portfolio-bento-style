const Icons: {
  [key: string]: JSX.Element;
} = {
  youtube: (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:youtube">
        <path
          id="Vector"
          d="M26.7194 6.05874C26.414 4.90396 25.5144 3.99448 24.3722 3.68584C22.3019 3.125 14 3.125 14 3.125C14 3.125 5.69821 3.125 3.62781 3.68584C2.4856 3.99453 1.586 4.90396 1.28067 6.05874C0.725922 8.15186 0.725922 12.5189 0.725922 12.5189C0.725922 12.5189 0.725922 16.886 1.28067 18.9792C1.586 20.1339 2.4856 21.0055 3.62781 21.3142C5.69821 21.875 14 21.875 14 21.875C14 21.875 22.3018 21.875 24.3722 21.3142C25.5144 21.0055 26.414 20.1339 26.7194 18.9792C27.2741 16.886 27.2741 12.5189 27.2741 12.5189C27.2741 12.5189 27.2741 8.15186 26.7194 6.05874ZM11.2848 16.4839V8.55395L18.2235 12.519L11.2848 16.4839Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  discord: (
    <svg height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g></svg>
  ),
  twitter: (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:twitter">
        <path
          id="Vector"
          d="M23.3274 7.70433C23.3439 7.93528 23.3439 8.16629 23.3439 8.39724C23.3439 15.4416 17.9822 23.5584 8.18274 23.5584C5.16369 23.5584 2.35914 22.684 0 21.1663C0.428949 21.2157 0.841344 21.2323 1.2868 21.2323C3.77787 21.2323 6.07105 20.3909 7.90227 18.9556C5.55963 18.9061 3.59643 17.3719 2.92002 15.2602C3.25 15.3096 3.57993 15.3426 3.92641 15.3426C4.40482 15.3426 4.88328 15.2766 5.32868 15.1612C2.88707 14.6662 1.05579 12.5216 1.05579 9.93149V9.86553C1.76516 10.2615 2.5901 10.5089 3.4644 10.5419C2.02912 9.58501 1.0888 7.95179 1.0888 6.10406C1.0888 5.11423 1.35271 4.20687 1.81467 3.41499C4.43777 6.64849 8.38068 8.76012 12.802 8.99113C12.7195 8.59519 12.67 8.18279 12.67 7.77035C12.67 4.83377 15.0456 2.44167 17.9987 2.44167C19.5329 2.44167 20.9187 3.08506 21.8921 4.1244C23.0963 3.89345 24.2511 3.448 25.274 2.83761C24.878 4.07494 24.0367 5.11428 22.9314 5.77413C24.0037 5.65871 25.0431 5.36169 25.9999 4.94929C25.2741 6.00509 24.3667 6.9454 23.3274 7.70433Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  github: (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:github">
        <path
          id="Vector"
          d="M8.36417 20.1805C8.36417 20.282 8.24831 20.3633 8.10222 20.3633C7.93598 20.3785 7.82012 20.2973 7.82012 20.1805C7.82012 20.0789 7.93598 19.9977 8.08207 19.9977C8.23319 19.9824 8.36417 20.0637 8.36417 20.1805ZM6.7975 19.952C6.76223 20.0535 6.86298 20.1703 7.01411 20.2008C7.14509 20.2516 7.29621 20.2008 7.32644 20.0992C7.35666 19.9977 7.26095 19.8809 7.10982 19.8352C6.97885 19.7996 6.83276 19.8504 6.7975 19.952ZM9.02409 19.8656C8.878 19.9012 8.77725 19.9977 8.79236 20.1145C8.80747 20.216 8.93845 20.282 9.08958 20.2465C9.23566 20.2109 9.33641 20.1145 9.3213 20.0129C9.30619 19.9164 9.17018 19.8504 9.02409 19.8656ZM12.3388 0.40625C5.35172 0.40625 0.00689697 5.75352 0.00689697 12.7969C0.00689697 18.4285 3.5231 23.2477 8.54552 24.9438C9.19033 25.0605 9.41702 24.6594 9.41702 24.3293C9.41702 24.0145 9.4019 22.2777 9.4019 21.2113C9.4019 21.2113 5.87563 21.973 5.13511 19.698C5.13511 19.698 4.56083 18.2203 3.73467 17.8395C3.73467 17.8395 2.58108 17.0422 3.81527 17.0574C3.81527 17.0574 5.06962 17.159 5.75976 18.3676C6.86298 20.3277 8.71176 19.7641 9.43213 19.4289C9.54799 18.6164 9.87543 18.0527 10.2381 17.7176C7.42215 17.4027 4.58098 16.9914 4.58098 12.1062C4.58098 10.7098 4.96383 10.009 5.76984 9.11523C5.63886 8.78516 5.21067 7.42422 5.90082 5.66719C6.95366 5.33711 9.37672 7.03828 9.37672 7.03828C10.3842 6.75391 11.4673 6.60664 12.5403 6.60664C13.6133 6.60664 14.6964 6.75391 15.7039 7.03828C15.7039 7.03828 18.1269 5.33203 19.1798 5.66719C19.8699 7.4293 19.4417 8.78516 19.3107 9.11523C20.1167 10.0141 20.6104 10.7148 20.6104 12.1062C20.6104 17.0066 17.6433 17.3977 14.8273 17.7176C15.2908 18.1187 15.6837 18.8805 15.6837 20.0738C15.6837 21.7852 15.6686 23.9027 15.6686 24.3191C15.6686 24.6492 15.9003 25.0504 16.5401 24.9336C21.5776 23.2477 24.9931 18.4285 24.9931 12.7969C24.9931 5.75352 19.3259 0.40625 12.3388 0.40625ZM4.90338 17.9207C4.83789 17.9715 4.85301 18.0883 4.93865 18.1848C5.01925 18.266 5.13511 18.3016 5.2006 18.2355C5.26609 18.1848 5.25097 18.068 5.16533 17.9715C5.08473 17.8902 4.96887 17.8547 4.90338 17.9207ZM4.35933 17.5094C4.32407 17.5754 4.37444 17.6566 4.47519 17.7074C4.55579 17.7582 4.65654 17.743 4.69181 17.6719C4.72707 17.6059 4.67669 17.5246 4.57594 17.4738C4.47519 17.4434 4.39459 17.4586 4.35933 17.5094ZM5.99149 19.3172C5.91089 19.3832 5.94112 19.5355 6.05698 19.632C6.17284 19.7488 6.31893 19.7641 6.38442 19.6828C6.44991 19.6168 6.41968 19.4645 6.31893 19.368C6.2081 19.2512 6.05698 19.2359 5.99149 19.3172ZM5.41721 18.5707C5.33661 18.6215 5.33661 18.7535 5.41721 18.8703C5.49781 18.9871 5.63383 19.0379 5.69931 18.9871C5.77991 18.9211 5.77991 18.7891 5.69931 18.6723C5.62879 18.5555 5.49781 18.5047 5.41721 18.5707Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  udemy: (
   <svg xmlns="http://www.w3.org/2000/svg" width="102" fill="none" height="102" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)"></path>
      <defs>
        <clipPath id="clip0_4_373">
          <rect
            width="28"
            height="29"
            fill="none"
            transform="matrix(-1 0 0 1 14 0)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  superpeer: (
    <svg
      width="26"
      height="29"
      viewBox="0 0 26 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame" clipPath="url(#clip0_4_330)">
        <path
          id="Vector"
          d="M23.0048 23.9962C22.0012 23.7879 21.0423 23.557 20.2436 23.3951L18.8968 23.094L19.057 21.7052C19.057 21.6361 19.0798 21.5665 19.0798 21.4969C19.0841 21.2036 19.0296 20.9125 18.9197 20.6411L18.6004 19.9003L19.0341 19.2059C19.2852 18.7894 19.3991 18.3269 19.3991 17.7944C19.3991 17.2392 19.2395 16.753 18.9426 16.3365L18.4174 15.6194L18.7606 14.7863C18.8961 14.4643 18.9658 14.1177 18.9654 13.7676C18.9654 13.282 18.9654 11.8241 16.706 10.9446C16.3868 10.8286 15.7477 10.6441 14.5605 10.5745L12.1186 10.4121L13.2829 8.26025C14.2189 6.54767 14.7436 4.99696 14.7436 3.9092C14.7436 2.91423 14.4238 2.03474 13.6932 1.7342C11.1602 0.623234 9.35739 2.35902 8.07923 4.48814C7.05223 6.2234 5.77408 8.44532 4.99824 10.0878C3.33216 13.6521 0.867355 16.221 0.867355 19.7843C0.867355 23.0244 3.01236 25.5701 6.93784 26.9125C11.7536 28.5555 18.9426 28.9953 22.0698 28.9953C24.3058 28.9953 25.5382 28.1158 25.5382 26.496C25.5382 24.8066 23.9637 24.205 23.0053 23.9967L23.0048 23.9962Z"
          fill="#FFD338"
        />
        <path
          id="Vector_2"
          d="M22.0012 22.5619C19.3991 21.9829 17.1626 21.4968 17.1626 21.4968C17.5505 21.2195 17.9613 20.641 17.9613 19.9234C17.9613 19.0903 17.5276 18.6042 17.1855 18.35C17.642 18.0026 18.2582 17.3777 18.2582 16.2441C18.2582 15.0177 17.4366 14.3929 17.003 14.0918C17.3451 13.768 17.8246 13.12 17.8246 12.2173C17.8246 10.6207 16.615 9.90313 15.6333 9.50978C14.8346 9.20924 13.3281 9.09324 12.0047 9.09324C9.83632 9.09324 7.87384 9.25511 6.93784 9.25511C5.81984 9.25511 5.9566 8.67669 6.3674 8.14415C6.61856 7.8436 9.79108 3.60855 10.3844 2.84506C10.7952 2.28931 11.2741 1.75729 11.6397 1.96556C12.0276 2.17384 11.868 3.1456 11.4572 4.21016C10.8404 5.87635 9.9736 6.94144 9.7682 7.31106L11.2289 8.21375C11.7993 7.49666 13.6479 4.37204 13.6479 2.35891C13.6479 1.45622 13.3058 0.692729 12.6438 0.276183C11.9818 -0.117162 11.1374 -0.0939623 10.3844 0.368983C9.88208 0.669529 9.38028 1.10927 8.9466 1.66449C7.8052 3.14613 5.38616 6.24649 4.49592 7.40386C3.21776 9.09324 3.8116 11.176 6.52704 11.176C7.48592 11.176 10.6127 10.9445 11.8222 10.9445C13.2142 10.9445 13.8991 11.0141 14.378 11.0832C15.2911 11.2224 15.8163 11.6389 15.8163 12.1941C15.8163 12.5875 15.6333 12.8653 15.314 13.0968C14.9942 13.3283 14.6978 13.6752 14.6978 14.1614C14.6978 14.7398 15.223 14.9713 15.5652 15.2027C16.0217 15.5033 16.2952 15.7116 16.2952 16.1977C16.2952 16.6375 15.976 16.8921 15.6104 17.1695C15.314 17.4015 14.9261 17.6556 14.9261 18.1876C14.9261 18.6738 15.2682 18.9053 15.4965 19.0903C15.7248 19.2754 15.976 19.4837 15.976 19.877C15.976 20.2704 15.7934 20.456 15.3364 20.7333C14.9718 20.9416 14.4472 21.3355 14.4472 21.8907C14.4472 22.5155 14.8803 22.7928 15.405 22.932C16.6603 23.2326 20.4032 24.043 21.6814 24.3435C22.0922 24.4363 22.503 24.575 22.503 24.922C22.503 25.2694 21.9554 25.4313 21.1796 25.4313C18.486 25.4313 11.0006 24.8761 6.59568 23.3254C3.60568 22.3072 1.96248 20.4328 1.96248 18.1882C1.96248 16.2441 3.24064 14.5083 4.6332 13.5134L3.37792 12.2168C1.36916 13.6288 0 15.8734 0 18.234C0 20.9653 1.59744 23.7419 6.00236 25.2462C10.6808 26.8428 17.7788 27.329 21.0881 27.329C23.3475 27.329 24.4431 26.3799 24.4431 24.9457C24.4202 23.5801 23.3251 22.8392 22.0007 22.5619H22.0012Z"
          fill="#222222"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_330">
          <rect width="26" height="29" fill="" />
        </clipPath>
      </defs>
    </svg>
  ),
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}
    >
      {Icons[type]}
    </div>
  );
};

export default Icon;
