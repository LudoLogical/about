import React from 'react';
import Link from 'next/link';
import { FiExternalLink, FiFile, FiHeadphones, FiMusic } from 'react-icons/fi';
import ReactAudioPlayer from 'react-audio-player';

const originalWorks = [
  [
    'Final Refrain',
    'final-refrain',
    'https://musescore.com/user/6394601/scores/9416035'
  ],
  ['MegaPower!', '', ''],
  [
    'Adventure! Reprise',
    'adventure-reprise',
    'https://musescore.com/user/6394601/scores/9416005'
  ],
  [
    'Miss This',
    'miss-this',
    'https://musescore.com/user/6394601/scores/1899851'
  ]
];

const arrangements = [
  [
    "If You're the Coffee",
    'if-youre-the-coffee',
    'https://musescore.com/user/6394601/scores/10765234'
  ],
  [
    'Mona Pizza',
    'mona-pizza',
    'https://musescore.com/user/6394601/scores/9426571'
  ],
  [
    "Gotta Catch 'Em All!",
    'gotta-catch-em-all',
    'https://musescore.com/user/6394601/scores/9416038'
  ],
  [
    'Video Game Medley',
    'video-game-medley',
    'https://musescore.com/user/6394601/scores/9416071'
  ],
  [
    'Peppermint Winter',
    'peppermint-winter',
    'https://musescore.com/user/6394601/scores/9416059'
  ],
  ['Stronger', 'stronger', 'https://musescore.com/user/6394601/scores/3307551']
];

const beepboxWorks = [
  [
    'Mystery Factory',
    'mystery-factory',
    'https://beepbox.co/#5sbkbl00e07t7a7g07j7i0r1w0111f0000d1111c0000h0000v0000o3210b4h4h4h8Ohktxsid5c04y8wp22Pxj7apmCSiHFGHLFGF3h3hpjlpnjlnpjli6w2Cviru3NShOn9j7GCCD9E3DkRpez9HFFOq0VldmjE9QQ1Oqp79QpdJdejhAQRlQR8QSY8WpZQMJddddeCGSCCCCDjbRkQQQQWqraqkNMrcCPjJNS8QN0id16wd0q0W0S1F3i6Ad8qgQxQD10'
  ],
  [
    'Excite!',
    'excite',
    'https://beepbox.co/#5sbk4l00e07t7a7g07j7i0r1w1111f0000d1111c0000h0000v0000o3330b4h8h4w0i4h80018Q0i8y8Mp25lFxNj8QOdkzl9RRkRRmRkSSkSlmlmRRkRRmRqrraraHaHqWGqWHqGrraraHaHaGGQPY0FxxMIzjpl9lkRlkRlmlkSmkSlmlkRlkRlmlqrbaraHaGqGGqGHaGrbaraHaGqqGQP-VRQz8ROs3j0SSmlQSkwJFFGGAGFeKGCKGhGMId8QOlkBljlljllpljppjplpljlljllplFIIFIGIGFGGFGGIGFIIFIGIGFFGHM0kPWEEj71wqqF2CGCGTwd56j8QRkRkRlSYT9KM30o79OHcODrDkVmnjBpdiqpgkNe8Q4q0Q1E2C10a0swdoqgQxF3i6Ad8t8qgQxF3i6wd0qgw'
  ],
  [
    'Oriental!',
    'oriental',
    'https://beepbox.co/#5s0k4l00e0bt7a7g0bj7i0r1w1111f0000d1111c0000h0000v0000o3320b4x8i4zgQ4x9mlzgQ4x8Qd01m4h4h4h4hp23_FCQC74BniCe70QQXSNjlqCCPSdyGCDyqGqJHoIAXKaYhjl8OcB8QQQQQRlSmXU6CiHFIKKGFGO0FCWC74B8QFzP8QQXmTjj0FFKZzpFFFUy1FFQ7oFFFUHJSkRmmkMm1FFx8qhOv7YvvN-PITW5EszlpND8GFGJFKAUaGCH8apDgszjkCriqrnqFGFGSJCCfA3Lp43we1gddmTOqGqH0SOtZldmhO96hAF6iAqqqqqqGXbtY3j9lQSnnlmkV000'
  ],
  [
    "We're Finally Done",
    'were-finally-done',
    'https://beepbox.co/#5sbk4l00e0jt7a7g0jj7i0r1w1111f0000d1111c0000h0000v0000o3210b018h4h80d3cPd14jh4h5pCtCpCs15i8zi04lpCpU018PcP804zcPcwp27oFxPhhh9kki8aqqWqqo6OyyyOyyIaoYQOfbEEEHEEH1jjrjjjrphhhphgCEjOaaaaqXagmmgddddld555JBJ8tyKPAQkkmlSkwIIJFFFGFEEEJIJSKnhhhjnni2OOSCCCGCyyy1wo711j3GyyyKyyh1jjj0QRilB555t55okNVFHIMXSCqpFCPGpFCRw1nttRTuLntKOj18HQPjdcT_jdcT-5CftRTv_zWaabGabgkQQMddlJB555t52qw7NEEEExqa945ddc3jl9mkkklQklxVCCLBQkklQklwFFFIFGIIEEEHEET-hhhhv8O5896GGCCCGOyyyOOOAeNjpPaaabbbagmllkQQRmkkkmmmrv8EEEHHHF1plljjjlphhhnp0U5qr6cvcRtbzjXJdf3jf0FXtXmTnjsdWPoPKcvDBKgesw_ej6CNKRcew7yZcBZcBRcf8DOv9ELj8QN0gQ1Vl5Wpbw'
  ],
  [
    'Prove Yourself',
    'prove-yourself',
    'https://beepbox.co/#5sbk7l02e0dt7a7g0fj7i0r1w1161f0000d1111c0000h0000v0100o3210b4x8id3hmlBo04x8Qd0tmlw0i4x8i018i014h8y8j8y8p24QFzMC7czAFBFr5dmPlnAp5aqAxOJKP9UPoFGSqGIDcAAR7uhKSVf6X5dmPlJl9GIZLyGIDyZyCHpGSGubFDNnnnnmCCTOGGGWrsMFzx9xN8papZrdmPn8VmjkCFPOJyL9UPpGSr839Pr4R7qqvveRSlQOvaPb4OZIjlpINU-EmKWXHKMqKXtAxV4wHKKSqrCY_WHHKKWXwhWXJSi7Ai2KXdP_CLMCOWhmqv5gh2PiMi1CFxHZ_X_QtwT10aC01Mocd8qgQxF3i6AeBh00LaOsH9OIDaOsH9OIDaOuk6Ed8qgQxF38kQk0'
  ],
  [
    'THEY ARE COMING',
    'they-are-coming',
    'https://beepbox.co/#5sbk9l00e07t6abg07j7i0r1w1111f0000d1111c0000h0000v0000o3220b4xd5hx8jhkoi4Ql64x8i4wp23cFDN0M5tdltdiq_fbGGwqGGGGIPClRSllmkOmlPrrqXqGWqsOHDNBZeP8RkOdlCPT9SraHrarARTiCLPj2lqapa0RRMdmSCCTlqCDSCvuRHFSZhjni4FDxgdlltqq-30XGGXdsd9gL6m-WGkwsO1SlU7lrBWGrkRQxaqo4CpZ0SpA0kOdPcCuGGyvy-bE7N5QOfypJXcCvQC0'
  ],
  [
    'Lullaby for Monsters',
    'lullaby-for-monsters',
    'https://beepbox.co/#5sbkbl00e03t7a7g03j7i0r1w1111f0000d1112c0000h0000v0022o3210b4zgh4xd24h4p21cFD1FzN09HJW3jlHSatDpFAtKNjJrtduLoGSZOCE9tcWG2YL0Q5MarxZo79X0Fy03j0E6i6Yd1x00'
  ],
  [
    'Psychotic Smile',
    'psychotic-smile',
    'https://beepbox.co/#5sbk9l00e07t7a7g07j7i0r1w1111f0000d1111c0000h0000v0000o3220b4xd5hx8jhkoi4Ql64x8Qd0p23SFDR8kMddldC0FAV2CBdf_CnnnM5elOaWqGU70qKv6n6rltBmVScSHbbtMFzP8QQOcxjjhpjjh8kQWGGqkQ-cyGCD9VlddejBQQSpLeFFFwaqqqXaqsHAkQQRkQQSTkQVDbGFFHFFFLAaqsEGWneBNaquz8YCI0FVkU5tPuPqZ5Q3lLIAqyCpRiow8sCH9FGj0w6RGFSwVdlelI0StmPjlI0SJHoEOqqIw6RGSqqJw6RJrdejjlA0Sw'
  ],
  [
    'Hyperspace Wanderer',
    'hyperspace-wanderer',
    'https://beepbox.co/#5s0k4l04e07t6a7g0bj7i1r1w33336611f11000000d12111211c00000000h00000000v00001100o3210b4xci4Ql6000i4Ql6000i4Rpk000j52kCp24wltbzjOBeSmCkSdhsGsjYPb9WpPfaDcszIAgFzFkM8qGGwTRRxGGGgQlQxEFFjo_4ejli6yCBcYaGCL3wdY26GGEdttoqGGId5t8qaqt5MVdl8qaqkSd21lQKdf9rjhMkNVjjVu8BdzpltfziVNcY6CCHOaSLzbXPKuV-8DCgkNe31xF3i6Ad8qgQxqgS1F3i6Ad8qgQxqgR1F3i6Aao4wE1g2w55553AxF3i6Adgsw50a0k0EEEEsEd8qgQxF3AwE1g2w55553AxF3i6Adgsw50a0k0EEEE0'
  ]
];

const renderMenuItems = (
  works: string[][],
  startIndex: number,
  activeWork: number,
  setActiveWork: (newValue: number) => void
) => {
  return works.map((work, index) => {
    return (
      <li
        key={work[0]}
        className={
          activeWork === startIndex + index
            ? 'md:bordered'
            : 'md:hover-bordered'
        }
      >
        <a
          onClick={() => setActiveWork(startIndex + index)}
          className={`justify-center !border-l-0 md:justify-end md:border-r-4 ${
            activeWork === startIndex + index ? 'max-md:active' : ''
          }`}
        >
          {work[0]}
        </a>
      </li>
    );
  });
};

const Music: React.FC = () => {
  const [activeWork, setActiveWork] = React.useState(0);
  const [activeBeepboxWork, setActiveBeepboxWork] = React.useState(0);
  const activeWorkData =
    activeWork >= originalWorks.length
      ? arrangements[activeWork - originalWorks.length]
      : originalWorks[activeWork];
  return (
    <section
      id="music"
      className="mx-4 flex w-full max-w-xl flex-col items-center justify-center py-20 lg:max-w-4xl"
    >
      <h2 className="divider mb-10 text-3xl font-bold">Music</h2>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center justify-start gap-x-6 lg:flex-row">
          <ul className="menu w-48 bg-base-100 text-center md:text-right">
            <li className="menu-title">
              <span>Original Works</span>
            </li>
            {renderMenuItems(originalWorks, 0, activeWork, setActiveWork)}
          </ul>
          <ul className="menu w-48 bg-base-100 text-center md:text-right">
            <li className="menu-title">
              <span>Arrangements</span>
            </li>
            {renderMenuItems(
              arrangements,
              originalWorks.length,
              activeWork,
              setActiveWork
            )}
          </ul>
        </div>
        <div className="divider divider-vertical md:divider-horizontal" />
        {activeWork === 1 ? (
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h4 className="text-lg">Collection</h4>
            <div className="tabs tabs-boxed justify-center">
              {beepboxWorks.map((work, index) => {
                return (
                  <a
                    key={work[0]}
                    onClick={() => setActiveBeepboxWork(index)}
                    className={`tab ${
                      index === activeBeepboxWork ? 'tab-active' : ''
                    }`}
                  >
                    {work[0]}
                  </a>
                );
              })}
            </div>
            <h4 className="text-lg">Audio</h4>
            <ReactAudioPlayer
              src={`music/${
                (beepboxWorks[activeBeepboxWork] as string[])[1] as string
              }.wav`}
              controls
              className="w-52 xxs:w-72"
            />
            <h4 className="text-lg">Interactive Player</h4>
            <button className="btn">
              <Link
                href={
                  (beepboxWorks[activeBeepboxWork] as string[])[2] as string
                }
                className="flex flex-row gap-x-2"
              >
                Beepbox.co
                <FiExternalLink />
              </Link>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h4 className="text-lg">Audio</h4>
            <ReactAudioPlayer
              src={`music/${(activeWorkData as string[])[1] as string}.mp3`}
              controls
              className="w-52 xxs:w-72"
            />
            <h4 className="text-lg">Downloads</h4>
            <div className="btn-group btn-group-vertical xxs:btn-group-horizontal">
              <button className="btn">
                <a
                  href={`music/${
                    (activeWorkData as string[])[1] as string
                  }.mp3`}
                  download
                  className="flex flex-row gap-x-2"
                >
                  .mp3
                  <FiHeadphones />
                </a>
              </button>
              <button className="btn">
                <a
                  href={`music/${
                    (activeWorkData as string[])[1] as string
                  }.pdf`}
                  download
                  className="flex flex-row gap-x-2"
                >
                  .pdf
                  <FiFile />
                </a>
              </button>
              <button className="btn">
                <a
                  href={`music/${
                    (activeWorkData as string[])[1] as string
                  }.mscz`}
                  download
                  className="flex flex-row gap-x-2"
                >
                  .mscz
                  <FiMusic />
                </a>
              </button>
            </div>
            <h4 className="text-lg">Interactive Player</h4>
            <button className="btn">
              <Link
                href={(activeWorkData as string[])[2] as string}
                className="flex flex-row gap-x-2"
              >
                MuseScore.com
                <FiExternalLink />
              </Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Music;
