export interface HeaderDashboardProps {}

export function HeaderDashboard(_: HeaderDashboardProps) {
  return (
    <div className="py-8 px-[60px] border-l border-l-[rgba(35,_35,_33,_0.2)] border-b border-b-[rgba(35,_35,_33,_0.2)]">
      <div className=" flex items-center justify-end gap-10 ">
        <div>
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8109 17.8851L19.7987 17.9014L19.8131 17.9158L24.9582 23.0609C25.1868 23.3168 25.3088 23.6505 25.2992 23.9935C25.2895 24.3368 25.1489 24.6633 24.9061 24.9061C24.6633 25.1489 24.3368 25.2895 23.9935 25.2992C23.6505 25.3088 23.3168 25.1868 23.0609 24.9582L17.9158 19.8131L17.9014 19.7987L17.8851 19.8109C16.24 21.0467 14.2376 21.7138 12.18 21.7116C6.92435 21.7116 2.64844 17.4356 2.64844 12.18C2.64844 6.92435 6.92435 2.64844 12.18 2.64844C17.4356 2.64844 21.7116 6.92435 21.7116 12.18C21.7138 14.2376 21.0467 16.24 19.8109 17.8851ZM5.33156 12.18L5.33156 12.18C5.33374 13.9957 6.05597 15.7363 7.33982 17.0202C8.62368 18.304 10.3643 19.0263 12.18 19.0284C13.5345 19.0284 14.8586 18.6268 15.9848 17.8743C17.111 17.1218 17.9888 16.0522 18.5071 14.8008C19.0255 13.5494 19.1611 12.1724 18.8968 10.8439C18.6326 9.51547 17.9803 8.29519 17.0226 7.33742C16.0648 6.37965 14.8445 5.7274 13.5161 5.46315C12.1876 5.1989 10.8106 5.33453 9.55922 5.85287C8.30783 6.37121 7.23825 7.24899 6.48573 8.37521C5.73322 9.50143 5.33156 10.8255 5.33156 12.18Z"
              fill="#232321"
              stroke="#232321"
              strokeWidth="0.046875"
            />
          </svg>
        </div>
        <div>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.69861 20.5252L8.71933 20.5142C8.70608 20.4892 8.69955 20.4611 8.70036 20.4328C8.70118 20.4045 8.70931 20.3768 8.72397 20.3526C8.73863 20.3284 8.75932 20.3083 8.78403 20.2944C8.80873 20.2806 8.8366 20.2733 8.86493 20.2734H8.86502H15.136C15.1643 20.2734 15.1921 20.2807 15.2167 20.2946C15.2414 20.3085 15.262 20.3285 15.2766 20.3528C15.2912 20.377 15.2993 20.4046 15.3001 20.4329C15.3009 20.4611 15.2944 20.4891 15.2812 20.5141C14.9623 21.1069 14.4889 21.6023 13.9113 21.9478C13.3336 22.2933 12.6731 22.476 12 22.4766C11.327 22.4759 10.6666 22.2932 10.0891 21.9477C9.51145 21.6022 9.03812 21.1068 8.71925 20.5141L8.69861 20.5252ZM8.69861 20.5252C9.01949 21.1216 9.49579 21.6201 10.077 21.9678C10.6582 22.3155 11.3227 22.4994 12 22.5L15.3019 20.5252C15.317 20.4966 15.3245 20.4646 15.3236 20.4322C15.3227 20.3999 15.3134 20.3684 15.2967 20.3407C15.28 20.313 15.2564 20.2901 15.2283 20.2742C15.2001 20.2583 15.1683 20.25 15.136 20.25H8.86502C8.83264 20.2499 8.80078 20.2582 8.77255 20.274C8.74432 20.2899 8.72067 20.3128 8.70392 20.3405C8.68716 20.3682 8.67787 20.3997 8.67694 20.4321C8.67601 20.4645 8.68347 20.4965 8.69861 20.5252ZM20.3815 15.7359L20.3815 15.7359C20.417 15.7787 20.4533 15.8229 20.49 15.8675C20.53 15.9161 20.5704 15.9653 20.6107 16.0139C20.8089 16.2532 20.9343 16.5443 20.972 16.8528C21.0098 17.1612 20.9583 17.474 20.8237 17.7541L20.8237 17.7541C20.5376 18.3522 19.9339 18.7252 19.2422 18.7252H4.76299C4.06794 18.7252 3.46007 18.3516 3.17494 17.7509L3.17491 17.7508C3.04091 17.4708 2.98994 17.1583 3.02802 16.8502C3.0661 16.5421 3.19164 16.2514 3.38978 16.0125L3.38992 16.0123C3.45802 15.9286 3.52505 15.8478 3.59108 15.7682C3.6004 15.7569 3.60971 15.7457 3.619 15.7345L3.619 15.7345L3.61916 15.7343C4.13506 15.1116 4.55135 14.6091 4.83764 13.8194C5.12378 13.0301 5.27955 11.9555 5.27955 10.1883C5.27955 8.58822 5.60002 7.2694 6.24861 6.21543C6.89707 5.16167 7.87464 4.3708 9.19222 3.82839L9.19228 3.82855L9.19473 3.82718C9.21127 3.81793 9.22616 3.80599 9.23876 3.79184L9.24058 3.79346L9.24372 3.78296C9.64863 2.42845 10.7549 1.52344 12 1.52344C13.2451 1.52344 14.3519 2.42845 14.7568 3.78436L14.7547 3.78499L14.7614 3.7929C14.7741 3.80768 14.7893 3.82009 14.8063 3.82954L14.8062 3.82969L14.8088 3.83074C15.9381 4.29537 16.7937 4.92352 17.4264 5.7508L17.4264 5.75082C18.2845 6.87067 18.721 8.36521 18.721 10.1897C18.721 11.9563 18.877 13.0304 19.1632 13.8197C19.4492 14.6082 19.8646 15.1107 20.379 15.7329L20.3815 15.7359Z"
              fill="#232321"
              stroke="#232321"
              strokeWidth="0.046875"
            />
          </svg>
        </div>
        <div className="px-4 py-3 border border-[#1C1C1A] flex items-center gap-1 rounded-lg cursor-pointer">
          <span>Admin</span>
          <span>
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L6 5.5L10.5 1"
                stroke="#1C1C1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}