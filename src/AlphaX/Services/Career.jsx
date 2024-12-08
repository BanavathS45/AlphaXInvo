import React, { useEffect } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import ScrollAnimation from "../Services/ScrollAnimation";
import AOS from "aos";
import "aos/dist/aos.css";
const Career = () => {
  const arrowImg = "https://cdn-icons-png.flaticon.com/128/545/545682.png";
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: "ease-in-out", // Easing function (optional)
    });
  }, []);
  return (
    <>
      <div className="career">
        <RoutingFile />
        {/* Balls following the scroll */}
        <ScrollAnimation />
        {/* Section 1: Join the Team */}
        <section className="join-team" data-aos="fade-down">
          <div className="tDiv1">
            <h1>
              Want To Join <br />
              The Team?
            </h1>
            <p>
              Be our next human <br /> experience designer
            </p>
          </div>
          <div className="tDiv2">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhIQEBAVEBUQFRAQFQ8VFRUVFQ8VFRUWFhUVFhUYHSggGBomGxUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHSUtLS4tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGBwj/xAA8EAABBAAEBAQEBAUDAwUAAAABAAIDEQQSIUEFMVFhEyJxgQYykaEUQlKxYnLB0eEHgvAVQ5IjM0Sy8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAgIBAwQCAwEAAAAAAAABAhEDIRIxQRMyUSJhccGh0RSBkQT/2gAMAwEAAhEDEQA/APmgRGoSu0rUzCWrBUUgpAHaitKA0ozEgDtV0NquECLBXahIjUAGaitQmJmIJAEjYmWNXRRphsaZIMMXGNMBil7UxUZ8gS8gTkwSrwmAnIUAlMysS7mpFIi1ChdaCjiqPcuc5AkcgCHOVC5Q4qhKYElyo5yglVJQBBKqVKglAEKrlKgoAqoViFFIAhPYYBIqzXkKZRtFwlxdj8tbIFFTCb5pttKFHiaSlyMkFXaUEOVwVqc4cOUgoIKkOQA0wozClWFMRpAMsKIChMCM1qKFZCIwKAFcIFYRibw4SjU5h0h2aMITTAlISmmOQAUNVXtUhy570AIzNSrwnJSl3BMBKRqA9qclal3NSKSFHNQXp1zErO1ACr3oTnLnqhVAcSqEqSqlAEFVKkqEAQVBUrkAVXKVICAK0oIRFBCABEKFcqCEAWiJtONYUrhxqnmrHI9nTijaMS1YFCVwVscwQFEagtTEQQINEE5C1Bhan4WpktlmMV8qu0K1IoiwSlS5qgBIYRidgCTYmonJDHoymGuSTXookQMbzockiCZENz0DCEoT3Kr3pd8iQBHFM8GwPj4iKHWnvaHEcwwavP8A4gpDOtT4U4o3D4qKV5pluY89GvBbm9ASD6AoZUXs+xYDhkEcIgZE0R1RYQCHbEuv5ia1J5r43/qFwNuExBbGKilHiRi7yi6c32P2IX1qXHljqGoOvqDqCD6L59/qc18owYsOkc+SFtDLmLyzKK+g91nC7NskVWj5zLA6s2UkaeYagEgmidjQJrslyvWcbwr2+Jlke1r/ABXSyF13GzLCwVYJzkgkb5286SnC/hPEYnztaMPGaIdIXWf5RVu63oNea0TsmcEujzZVSvosH+mOcUMZ5qcf/Z8ugJ1dn0F1rS+cpozIKhSVCYEKV1KUgIUgLlZoQM6lBCJlUEJgBcqlXcqFAgmH5psFIxHVM51jNbOjE9GQpUKwWxgy0abiSzEzGgljsKeiSERT2GYXGmiyqIYw1EAQASNCvV/BYgb4mImFiKqG/InTp6qZSpWVixPJLijzTmqlL2PEcdBiiSYmtvkQKcO+bf3Xk8VCY3Fjtt+o2KSdlZcLxsoFcOQrXteGcFw8EPiYwBznj5TyYDsBu5Z5c0catjw4ZZXSPJtlRRMk53tzOy/LZr0vRUEq0Io0PEU50gJUWNxcQBzJAHqdEhoLI/uohnaCQ5ocHaG+Y7g7L7fw7g+HgibC2JhpuVzi1pMhoZi4ka2f6L59xb4NZ+OEUbsrJXseIyDQjOrwD2p4Hso5pluDVM83iOFSZDNE174xzflJDf8AdVLKLl+gXQtawRsaGtaMrWAaNAFAV0XleK/CuGmjdGyJkTz5vGY0Bwfz1/h6hKM/k0lhvcTyvw18YBgZh8UBkaAyOaqMQGgDq5t77b3t6vGcO8Z+HeS0Nw8hmadC4uDSGiullrr/AIQvknFcI+CWSCQU6Jxaeh3BHYggjsQvdYD4hZ4cTHOpzYYQRysiNoVsWOEpJ/Y22fD8Fszuzhrg/I5oyvLQWx5heoaCaG963t6XAYCF+YuuQigSSQL7AL5lxv4yEIDYcssp53ZZEO9HV3b69F5LH/FePmYY34l4Y7UxsyxtPY5AC4diSlxYOSXZ7/8A1B+MIMOyTBYFwdJLbJZQbGHadHRtdu86j+HXdfJV1KFaVGbdnLgppdlTEcuU0pASGVpXaFwCI1qALAIb0ZAkKYAnKhCIiMiSYJWKq+ZFlhQcpUtplpNCKu1UpXarMy7UZpQAUaCNzjlaLP8AzqgQwyRaXC8RTwkm8Ofu5g/3X+wRI8K9pBBa6jsf70onJNNWVjVSTPRYmNsgsaO69UCLEubE9nLMXWPb/CB49Uhzy2LHuuaM248Weg8axz5xGuF4yjzTfG5A4McOYtvtzH9V5zOWmwnZ8RbGrSDfKgzKMsLZs/CuFEk4LvlhHiu9vlH1/Zdxzizp5XOvytzBo7dfdL4TFeDhXVo/EuIvpG3T7m1nR2dGgku0oa6LOuWVyfS0v2YXwxKC7e3+kMYDCPmkbHGLLvo0bk9lv/E2Gw+Hhjw8YBkJDnSfmNc/QdkXgoZhIHSyfO8WRuBs1eYxuKdK90jjq4/QbBLm8mTXtX8sv01ix790v4QFWDlP4eTL4nhuyfrynL/5VSFa35HM4H2LgfHHy4eKZzrJaA7+Zpyu+4v3W3gMSyZ7S5ozM1Y6hYtpBo+6+TfBGGxcsr48NKI2hviSF7c7KFAeXS3G+oNA66L6DKRh3seHgjQ9KO45nT3SaRtB8lTNjiWJdmEbPzEhx/MNNMve6XQEsu6DQHCzd235nucdA3Q+uhvWlgS8VyiSSMeNIAcrbrnzOuhcdaHb1o0ONL2NDntkcMri/wCUZgbBDQdRppsVFbOrj9Pf9nifizBCTGyTvAyCpjrYliygRV/NQb7nosPg/DJcdOQ01dufJVhl8tOpO3Y9F6b4l4Hj5muMbRNmdmkOYMLsopjQ12lCzoCeazGfFzcFD+FwMDo5P+5ipmgSF+5Ef5e1nTopSkaynCEKXb7Mb4w+HG4GRkXjiVzmlzmAUYumbXfX6Lz6NiJXPc573F7nHM5zjZcTuSUMBdUetnkSq9FaXZUQBSGp2KigCkBEyKcqVhQPKpDEUNVwxMEBDFICNkVaSsoG5LyJ5sDjsiDhxOyoRlsBT0MJOy0MPwo9FsYbhmnJRPovGnZ5z8GVQ4Ar1xwPZLvw3ZYxZ0SifN1NqtqF0nHRfMmcJijGcwAOlU66+xCTUgoCj0EPFA7Q4UO/kdID9DmRDiYtxLF/M0OH10KR4Xx6eDRjvL+k/wB16bA/GQdpJp2NELkzOcXqNr8/o68MMU/dKn+P2mZ4hJbYcHt66j9xS7DYcB7PEvwy5uZw/TYv0NL00eJw0o1a0Xu3yn7LH4pw10QMkLrbuRt/M3kR3XPDNGWun9zseGUFfa+39CfF8KGSyBrcrHOJY278p+WuuiUgZmFHbRV4lxYuMYcKLLuuRB0odFd7dC5p0IzDuurHy4pvs5MyStR6IxGIuhs0Bo9AtvADwG53aOI0G4tecwYJdf6fMmpZy52ZzrLiiSXtM4cl9ZpYvFOeWFxtoNkbarS4RFD4he+Jr/DbbIjeWSRzmsYHD9Nus7UNdFhDlRTuFmOVwHzZXN9bFWoqkbRlGU030auL+IjNLlIY8Nbl8TIAX7ENr5I9KDRtzskrAx0bWvOX5TTgP03t7Gws/DzZXWtqEQy34jzG6hT+Y9CEN0dOSp4683of+EOPz4d5iia17Jy3xGu0oNB82f8AKACSbsaL2c7HYuMuw9yNN6ts8jWm+y+XkuFxsIt2r3jk1l+Ue9XW+nRP8HdiG+TCyStMlDyvcC4+g0H79ytFI5p44wit/V8HqJOHywszSvDW3VP8up7HV3L7I0eKe2jd9CF5Di07oNZJHTzn5S9xeIerhZ1O3TXtqph/iqaMedrZQTWW8tehANBaLZi5Pq9n0iHiMrhQJICwfijARvYMRPTTmbHnJILwQ40evL1WNhfjJlZvw7gf05xlP++r+yzuNcdmxTh4lNYy8kLbysvfXVzupP2GiHHVISmlt7+wR2Nw7dGR5u+Qfu7VBfxBh/8AjsPrQ/YJENRI2KFjS+f+hLM34S/0gz5WkENhYy9xnJHpmdQ+iDkR2sVvDRZPYtShHdGqGEqouxNUVamYoCV2Hw62sFhuytkxi2zNGCKLFw3XkvSxYHTkjMwVbKHI6FiMrC8M7LSh4UOi0YIQE4HtCnkzT00jOi4aBsmm4RoUyYtoSk2PHVAqonEQALNkAtWm4gOqzZcWLRQ26PmFrrVVy3OIta61VcgZcOVsyEuQIbw+Mez5XV22XoeHfEMn5mkjrVgrzUbW1ZPstnDYxhaARRGlAbDke6582OEltHRhyTh7WMY+CN/mj5H8m7T27JfBYjKDFJpQOUncdEbyO+Vw9OR+iS4hG6uV1yO4SgqVGjne6GYJCBpYDq1rZGfh2HVtuHc6j2FUsnDzmtNtFp4EF3mDgADRB5oriE6lG7CtmIoVy9b+pV3Sk6sNObyUysb1VI41LfkzSViss/iPaQ3KTQd0Lr5q7i7ShZdVDqSaCvLgiD5S3zHS3Nab9ymsXg/wzYzLK0SO1EDfOWN/U94NDsBZPZUn8Fydqn2jb4F8KzzkMjYSPmc46a7l3TsDsvUY3FcP4U3K2sXjKoRsJdkcetfL/wDY9AvMO+JsZiI48DgriDqaXAshv9R8tBjdySSelcl0nBDACzD+cEZJccOUjub2RnZg5afNRs7CfyDTvR5x7ZZHl8jqc43lAs+gGyW4l4Vhlue5uhotDWnezl1Kb4jjmsuKAhzjo6Ucm9cp3Pfb15ZsGFPSlvFGLk49g2aaBMRBPQ4IdE7FhOjVoZWZ8cR6JmOA9Fosw56KXspQyqFWQogiUOeiQglZtGkUS2BW/BrSw2GG6adEANElJI2WKzIhwlLZwLGjmkXnVMQpORrHGjdZK0Dkgz4wLLkxJCUnnceSV2N0jTON7ocmO7rAlxTghSY3RaKBjLKa03EElPjliTYzVKyY9VRPI058dSTdxBZWIxRKWMhQSxQNU5Votw1q/wCGCtnOu6M+KAlPYfBg7aBSaHJF/EUKAWLk5PR0KCXZmYqOnEBCDUyWEmzum8PhgVsjBszQwp7CO/UStJvDwu/A86HIEnsBqShrQRlvQuMMw65lYQDkHn0Sr3E8uXRGw2Ge4+UE+iwa+DrVNbB4rB5dW6duqphZzdCweVhar+EvI8x9llOwcsTrLHEA2DV2PZUt9ilrodOKrSQV/EP6j+ykyVqDYO4PNBYGSkl0mTLqQefstF3w+7J4sD7ABcQeTgBZ1CTiiYr4EsfjKjAOtmwTsWnUHrofukGS5ni9aH3r/n0RJ3uEfnZQkALSRoddHNJ9xp1ReEQmV7hG1oytDi5xpulDXpv9E4xSQ5NslwvTmjRw0Dpz0NDn6oWOxob5InB7roua3yj+XMbd60EsXPOr3Fx9dB2Coyab2bfBOE+LmIcGURYPzdqHTmvU4P4cYOYs9Tr9uS8DEL7r2/wpI6GN2cnzEZYyfkAvWtrvl2Q3Q4rka/8A0pg2S00IbyC0RxC9kninE7Jci/TSEXPOwSsrHFPOaUIac0+QvTF4OFly0oeEVqjYXENAukU48HQKWzRRroBI0NS0r3bBNTvHRdGBWymosvlJdGdESTqnmStboSEli+YIKXxTCdQdeaHQK2akpaRa7BNjOZ8nIch1SQ4oymsLaAGpO5SbsaXOpujTpXZJN3VBKNK0w08ETnktOh+yzeJ4cMog6FS/ENzVy12Q5phJoToOXdU+Sd+DOHCSp9mNKSgGEnYrWmy1QpWjmYGlVdj4UYrcK47I44cUeLFtBKh3ENUWLiKwTIg1SEbuVJyNymU60RDGrsaZh2hBxDQqulSznknU0iEkOcC7QE1hpWhIEb3algHVa8jPgbrca1XfiiWua3TOMhP8J5hY7XActUQ4rok5JjWOtj0DY2/lvun4Ma0bUsJs16omc1opbRpGLN53EmIkfEYgQCdTtuvNB43+vRcZgDod+11SnRptG7xSPDSfM0A/qGhWBFxKbDh8YNskDhR1FHSx0KsZb/songa5pBOu3YqloiW+g+J4uz8I3DZc9sb5j/2zd6d9FmYaX/0xFEHeI8kyEkBuUaNaO2pJvtVpKaJzeaNw0+cHlQKrVaIt3TNfAcHF+aTU/pbde5/stb/ocLRbsz/V1fsAlsLjxHrltMYniheNmj1UNeTVNdUaPDDC002Jrf4uZ+p1WlicQwfKF5ZmIrkU7hMTrbzos2zZRo3sNigNr7BaE3ivGkRCyuGYiBrs7ngHmAdkXifxq7MBGAGjeuZQlYSdeB2HhMvNwoDXks7E46IW3dunJUHxpLQ5GjeWvmCfPE8LIM0ha3MLOVp8vZDjQozvtGPHxJt0AfotfDkFuZo5rGxPEImOuDUVrmH7JzDfEMDWeb5hXlAoFFDu+ka4wrzVjRUxMcbG29wHrosrCfF7ml1tzD8o2A7pHiPFziKa9rRewP7pNpDSb8Dj8Qx3yEG9NEvJEWvOd4blry881nkpwUAgcx4YZKBIFfKe6ycXjH5sxbZJytaAbvrScVYpyUd+ScZiKe4NOYWTXRRA+7NgV12Q/wAJKLzsc2zqfzDvSDE0NeM58g1I55ulrRRajSMnNSnbQGbPn316bhWEx0FbaI4xwzmm35S0bZcyTkmaPlskXqeQHYJputkTUbuPRVjHF3b90c4SR2gbVpB2Is3ZsfutbBcTmaACW1sTzT4/BPqLyLjgz+3Tmp/6G/p91eTiMee5Glwv8jqBRXcaw16RvHbOimLnFnlcNadYSlsNIAmnPCykrY4vRYoErtlXOSeaq89wa91UYA5F2AA6781LxR1H+folny3v/ZXdKdNdvotKM+QTxidAFzHjkSQT9P8ACWLz1Vo7o6X/AE7ooHKxtzspyOFOHPloq5zem3Rc6nOuwNGj6AD+ilzK15cqHI0ih2UE/X+yjxFL4AdWn2UHDP51Y7BOieTOM5VhiTVIPh9QVzY0cQ5sJO4OrStNe5VIzl5KPDP0XNCdByDCZ3O0wJHHkDt6JXNsNFeOct0H9EqDkNNmew61fS03DxIZhmjDxr5Mzm37jVIQY2uh6gi7TMuJaWgN8vfU+1bfdDihrJJeRyWeLLdPDrvIXW2vXnaX/Etd8wJoAakmv+clnZ9VId/lJwRays03YpoHlIFX9P8AgCiPEknMRp02+izmy7UB/XXdWLndL302+nqocEarOx52L5Cs3dEjmoOJoXQOn2KzA950DSL5DYDojHDTkX4bgOp5O9z6bI9MP8jex84mwRfevTme57KkWUHMQSKc7nXJZuWTY2EWBjzea26HXqO+6n06KX/o5Omeih+JcQGNaxwaGDQ5W2KOupCQi4xIx2ZriDqQdDvepPNIyPbpeo0FDQnerr7r0OH4VFAIziI5SZGh2UU1rQdfMa10rYJKI5ZBGLissxLgC9xFHLz9Q0dt1z+DYktL/DDRrZujyuqNarSwvF4oXODI2FpNhrmsc6hyHUa0ef7JuX4sc5uVsA0oZqB05G2ka691ezJyjR5H8K9vMj+axV7jN0UnBPFkva0WNb11NAAHVeqgnPhEgv1JIc4sj8IUaHMmuenYrAxMr2glsjXXoSQHuf7kHLyHdOrFzS0xN+HArObrSzp/gpuE02wC8bUDXTnSz/xBBaX04E/m3Hff/wDE/gOIEcsjbza5W3Z/Nd8+hpNWRLg3tGfOBZDm0SLAo2AL23QhADzv2aVs8SxLnC8wdRrM92tdtVjmd36ie4JpPYvoEIXa2iOlXLkqEnoGXjkqgnbXtYXLlaRLZDmHnRGys+MkgdABqoXJknENGg1O5PIeimTub/ouXJDRLXUNOf7KhJ53alcgLCRuIpN4bEPbo2xr6tPRSuTJY8yMvseHTm86IBHt0VTEW6kgh25Fj07LlyZlYnNh3G6o105BLPY5pohcuQWmWEBIJ6dd1XKVy5FDTGsJhQTq2yNr/dHxuGa0DJ8x0LRqB7rlyCbdiT4nC7FbUUMA+y5ckaXoJJE5uvMEfRXzObuRe24XLkMItj+DlBFOky9Blzfcbp12Ba8WXkga0AGk+lqFyBPstgWYdl54jIaJyZy0fVo1UGaKhUcbX0Bu73pxq+y5clxQLIxnhGOZA/xWRCR7TYqq6a9P7qvHOPvxJDp84c3MfykanXSh2ULklFdjllk9CjuJQANALnAVbXAgH083r0VY+PGi2MZGmrofN62dfRcuRxRXqSS0GdxMkfnuqvNTfWt/RIPx1mq66kWeunT2pcuVUkZcm+zNMhs1vrZPJNw4lwFmQmtBr7ey5cgbFZXOdz89a9T7of4mQaDTtSlcnQX4P//Z"
              alt=""
            />
          </div>
        </section>

        {/* Section 2: Openings */}
        <section className="openinggs" data-aos="fade-up">
          <h2>OPENINGS</h2>
          <div className="cardds">
            <div className="cardd" data-aos="fade-up">
              <div className="avatar ux-designer"></div>
              <h3>UX Designer</h3>
              <p>Experience: 2 years</p>
            </div>
            <div className="cardd" data-aos="fade-up">
              <div className="avatar ui-designer"></div>
              <h3>UI Designer</h3>
              <p>Experience: 2 years</p>
            </div>
            <div className="cardd" data-aos="fade-up">
              <div className="avatar frontend-developer"></div>
              <h3>Front-end Developer</h3>
              <p>Experience: 2 years</p>
            </div>
          </div>
        </section>
      </div>
      {/* Other Services Section */}
      <section>
        <div className="morecards ms-5 my-5 section150">
          <div className="title">
            <h1 className="heading text-center">More about us</h1>
          </div>
          <div className="row justify-content-center">
            {/* Technology Card */}
            <div className="col-5">
              <Link className="card" to="/about">
                <div className="card-body tech">
                  <h1> About.</h1>
                  <div className="row justify-content-between">
                    <div className="col-8">
                      <p> Leverage the power of code.</p>
                    </div>
                    <div className="col-2">
                      <img src={arrowImg} alt="Arrow Icon" width={"50%"} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Marketing Card */}
            <div className="col-5">
              <Link className="card" to="/team">
                <div className="card-body marketing">
                  <h1> Team.</h1>
                  <div className="row justify-content-between">
                    <div className="col-8">
                      <p> Creative strategies for brands.</p>
                    </div>
                    <div className="col-2">
                      <img src={arrowImg} alt="Arrow Icon" width={"50%"} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer value={true} />
    </>
  );
};

export default Career;
