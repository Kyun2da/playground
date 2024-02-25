import { Bio } from '@components/bio/bio';
import Image from 'next/image';
import { ReactNode } from 'react';

export function About() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-center px-4">
      <Bio className="my-8" />
      <div className="flex flex-row">
        <Image
          src="https://kyun2da-blog.s3.ap-northeast-2.amazonaws.com/TossSecurities_Logo_Primary.png"
          alt="tosssecurities_logo"
          className="-ml-8 !my-0"
          width={240}
          height={240}
        />
        <p className="self-center">토스증권</p>
      </div>
      <LeftLineSection>
        <Timeline title="WTS Silo" date="2024.02 ~" className="mt-0" />
        <BulletPoint>WTS 기능 고도화</BulletPoint>
      </LeftLineSection>
      <div className="flex flex-row">
        <Image
          src="https://kyun2da-blog.s3.ap-northeast-2.amazonaws.com/TossPayments_Logo_Primary.png"
          alt="tosspayments_logo"
          className="-ml-8 !my-0"
          width={240}
          height={240}
        />
        <p className="self-center">토스페이먼츠</p>
      </div>
      <LeftLineSection>
        <Timeline title="Client Platform Team" date="2023.10 ~ 2024.01" className="mt-0" />
        <BulletPoint>프론트엔드 어드민 페이지 CSR canary 기능 추가</BulletPoint>
        <BulletPoint>프론트엔드 공용 라이브러리 슬랙 릴리즈 봇 붙이기</BulletPoint>
        <BulletPoint>프론트엔드 공용 라이브러리 스토리북 환경 구축</BulletPoint>

        <Timeline title="BizApp Platform Team" date="2023.07 ~ 2023.09" />
        <BulletPoint>React Native를 통한 애니메이션 고도화</BulletPoint>
        <BulletPoint>약관 api 공통화</BulletPoint>
        <BulletPoint>자주묻는 질문 공통 컴포넌트화</BulletPoint>
        <BulletPoint>매출내역 및 정산내역 고도화</BulletPoint>
        <BulletPoint>
          api 응답 구조 개선을 통해 성능 최적화, FlashList를 사용하여 리스트 성능 향상
        </BulletPoint>
        <BulletPoint>앱스플라이어를 통한 레퍼럴 정책 수립 및 개발</BulletPoint>

        <Timeline title="SalesReport Silo, CA Team" date="2022.09 ~ 2023.06" />
        <BulletPoint>토스 비즈니스앱 출시 (React Native)</BulletPoint>
        <BulletPoint>리액트 네이티브 공통 컴포넌트 만들기</BulletPoint>
        <BulletPoint>날짜 피커 만들기</BulletPoint>
        <BulletPoint>금액이 바뀌는 애니메이션 컴포넌트 생성</BulletPoint>

        <Timeline title="Moneyflow Silo" date="2022.02 ~ 2022.08" />
        <BulletPoint>로그인 퍼널 고도화</BulletPoint>
        <BulletPoint>프론트, 서버, 스크래핑 간의 통신 프로토콜 수립 및 고도화</BulletPoint>
        <BulletPoint>스크래핑 확장프로그램 시스템 구축</BulletPoint>

        <Timeline title="Dashboard Silo" date="2021.09 ~ 2022.01" />
        <BulletPoint>토스페이먼츠 사용자들을 위한 대시보드 시스템 고도화 (Next.js)</BulletPoint>

        <Timeline title="로깅 표준화 길드" date="2022.03~" />
        <BulletPoint>
          pc, mobile 환경에서 개발자들이 로깅을 쉽게 할 수 있도록 로깅 스키마 설계 및 DX 개선
        </BulletPoint>
      </LeftLineSection>
    </div>
  );
}

function LeftLineSection({ children }: { children: ReactNode }) {
  return <div className="pl-4 mb-10 pl-15 border-l-8 border-gray-300">{children}</div>;
}

function Timeline({ title, date, className }: { title: string; date: string; className?: string }) {
  return (
    <div className={`flex flex-row gap-4 mb-2 mt-4 items-center ${className}`}>
      <span className="font-bold text-lg text-black">{title}</span>
      <span className="text-sm">{date}</span>
    </div>
  );
}

function BulletPoint({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center">
      <div className="w-1 h-1 bg-gray-700 rounded-full mr-2" />
      <span className="text-sm">{children}</span>
    </div>
  );
}
