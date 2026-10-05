from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from pypdf import PdfReader
import pypdfium2 as pdfium

OUT=Path(__file__).resolve().parent; ROOT=OUT.parents[1]; TMP=ROOT/'tmp/pdfs'
TMP.mkdir(parents=True,exist_ok=True)
pdfmetrics.registerFont(TTFont('KR','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('KB','C:/Windows/Fonts/malgunbd.ttf'))
W,H=1200,760
INK='#292e2c'; GREEN='#315b48'; MUTED='#737b76'; LINE='#dce3de'; BG='#f3f6f4'
PDF=OUT/'지우가람_포트폴리오_프로필형.pdf'
c=canvas.Canvas(str(PDF),pagesize=(W,H));c.setTitle('지우가람 | 개발 포트폴리오');c.setAuthor('지우가람')
def t(s,x,y,w=1088,size=13,b=False,color=INK):
    p=Paragraph(s,ParagraphStyle('t',fontName='KB' if b else 'KR',fontSize=size,leading=size*1.55,textColor=HexColor(color),wordWrap='CJK'))
    _,h=p.wrap(w,1000);assert y+h<716,(s,y,h)
    p.drawOn(c,x,H-y-h);return y+h
def rule(x,y,w,color=LINE,weight=.8):
    c.setStrokeColor(HexColor(color));c.setLineWidth(weight);c.line(x,H-y,x+w,H-y)
def rect(x,y,w,h):
    c.setFillColor(HexColor(BG));c.roundRect(x,H-y-h,w,h,7,fill=1,stroke=0)
def section(s,x,y,w):
    t(s,x,y,w,20,True);rule(x,y+39,w,INK,1.8)
def pic(name,x,y,w,h):
    img=ImageReader(str(ROOT/name));iw,ih=img.getSize();scale=min(w/iw,h/ih)
    c.drawImage(img,x,H-y-ih*scale,width=iw*scale,height=ih*scale,mask='auto')
def foot(n):
    rule(56,726,1088);c.setFont('KR',10);c.setFillColor(HexColor(MUTED));c.drawString(56,16,'지우가람  |  개발 포트폴리오');c.drawRightString(1144,16,f'{n} / 5')
def link(label,url,x,y,w=350):
    end=t(label,x,y,w,11,True,GREEN);c.linkURL(url,(x,H-end,x+w,H-y),relative=0,thickness=0)
def jump(label,n,x,y,w=350):
    end=t(label,x,y,w,11,True,GREEN);c.linkRect('',f'p{n}',(x,H-end,x+w,H-y),relative=0,thickness=0)
def page(n,label,title,sub):
    c.bookmarkPage(f'p{n}');c.addOutlineEntry(title,f'p{n}',0)
    t(label,56,35,size=11,b=True,color=GREEN);t(title,56,64,size=32,b=True);t(sub,56,121,size=13,color=MUTED);foot(n)
def block(label,body,x,y,w):
    t(label,x,y,w,17,True,GREEN);return t(body,x,y+34,w,14)+25
def steps(x,y,w,items):
    bh=78
    for i,(a,b) in enumerate(items):
        yy=y+i*(bh+15);rect(x,yy,w,bh);t(a,x+19,yy+11,w-38,15,True,GREEN);t(b,x+19,yy+40,w-38,12,color=MUTED)

# Summary: the three-column career sheet requested by the user.
c.bookmarkPage('p1');c.addOutlineEntry('프로필과 주요 이력','p1',0);foot(1)
t('PROFILE',56,31,276,47,True,GREEN)
pic('avatar.png',56,126,260,260)
section('기본 정보',56,415,276)
for label,value,y in [('이름','지우가람',476),('분야','Game · Web · AI',520),('이메일','rkfka04101212@gmail.com',564),('지역','부산',608)]:
    t(label,56,y,55,12,True);t(value,116,y,216,12);rule(56,y+33,276)

x=378;w=344
section('학력',x,39,w)
t('2025.03 - 현재',x,98,124,11,color=MUTED);t('부산대학교 재학',x+132,96,212,15,True)
rule(x,137,w)
t('2022.03 - 2025.02',x,157,124,10,color=MUTED);t('창원과학고등학교 졸업',x+132,153,212,14,True)
section('경력',x,222,w)
t('2026.07.27<br/>- 2026.08.07',x,280,124,11,color=MUTED)
t('감바랩스 인턴십',x+132,278,212,15,True)
t('LLM 활용 오피스 자동화 과제',x+132,309,212,11,color=MUTED)
section('활동 및 출시',x,368,w)
for yy,title,desc in [(425,'Drilling Steam 데모 출시','Unity 게임 개발 / 메인 개발자'),(491,'라이프 스타일 해커톤 참여','LLM 기반 스마트 미러 웹앱 개발'),(557,'블레이버스 MVP 해커톤 수료','3D 부품 뷰어 · AI 학습 도우미'),(623,'테크위크 게임 해커톤 수료','로컬 대전 게임 맵 로직 개발')]:
    t(title,x,yy,w,14,True);t(desc,x,yy+26,w,11,color=MUTED)
    if yy<623:rule(x,yy+54,w)

x=772;w=372
section('주요 프로젝트',x,39,w)
for title,tags,n,yy in [('LLM 기반 스마트 미러','팀 프로젝트  ·  앱 전반 개발 주도',2,94),('감바랩스 오피스 자동화','인턴십  ·  LLM 활용',3,153),('Drilling','팀 프로젝트  ·  Unity / Steam',4,212),('VisionLab','개인 프로젝트  ·  심박수 / 퍼스널 컬러',5,271)]:
    t(title,x,yy,w-45,15,True);t(tags,x,yy+27,w,10,color=GREEN)
    jump(f'{n}쪽 →',n,x+w-45,yy+3,45);rule(x,yy+53,w)
section('링크',x,354,w)
link('GitHub  /  github.com/GaMaius','https://github.com/GaMaius',x,411,w)
link('VisionLab  /  skillprac.vercel.app','https://skillprac.vercel.app/',x,443,w)
section('기술',x,493,w)
t('주요 활용',x,549,82,11,True,GREEN);t('Python · Unity / C# · MediaPipe',x+90,547,w-90,12)
t('개발 경험',x,588,82,11,True,GREEN);t('C++ · PyTorch · OpenCV<br/>JavaScript · React · FastAPI',x+90,586,w-90,12)
t('협업 · 배포',x,648,82,11,True,GREEN);t('Git / GitHub · Vercel · Render',x+90,646,w-90,12)
c.showPage()

page(2,'01 / TEAM PROJECT','LLM 기반 스마트 미러 웹앱','담당: 앱 전반 설계·개발 주도  |  Python · Flask · MiniMax · MediaPipe · OpenCV')
pic('DevGotchi00.png',56,184,566,282)
t('프로젝트 실행 화면: 자세 상태와 가상 펫, 퀘스트 표시',56,474,566,10,color=MUTED)
block('만든 서비스','사용자의 자세와 졸음 상태를 웹캠으로 확인하고, 음성으로 일정과 타이머를 조작하는 스마트 미러 웹앱입니다. 자세 상태를 가상 펫의 HP와 퀘스트에 반영했습니다.',56,523,566)
x=674;w=470
y=block('앱 전반 설계·개발','웹 화면과 Flask API, 카메라 기반 자세·졸음 분석, 가상 펫과 퀘스트, 일정·타이머 기능 등 앱 대부분을 직접 구현했습니다. 각 기능을 하나의 앱으로 통합하는 작업까지 주도했습니다.',x,185,w)
y=block('음성 명령을 앱 기능에 연결','음성 인식 결과를 MiniMax에 전달하고, 응답에 포함된 명령을 해석해 일정과 타이머를 조작하도록 구성했습니다. 화면에서 실행 결과와 앱 상태를 확인할 수 있도록 연결했습니다.',x,y+9,w)
block('협업 범위','앱 전체 개발은 제가 주도했으며, 다른 팀원 1명이 LLM·음성 인식 연동을 일부 지원했습니다.',x,y+9,w)
t('소스 비공개: On-Life  /  기존 실행 화면 및 구현 코드 기준',56,691,1088,10,color=MUTED)
c.showPage()

page(3,'02 / INTERNSHIP','감바랩스 | LLM 활용 오피스 자동화','2026.07.27 - 2026.08.07  |  기업체험형 인턴십')
section('담당 과제',56,190,334)
t('PowerPoint / Excel<br/>LLM 활용 시나리오<br/>설계 및 구현',56,253,334,25,True)
t('문서 작업에 LLM을 활용하는<br/>시나리오를 정리하고,<br/>도구 구현과 결과 문서 작성을<br/>수행했습니다.',56,401,334,16)
section('수행 범위',442,190,702)
steps(442,254,702,[('과제 정리와 시나리오 설계','문서 작업에서 LLM을 활용할 수 있는 기능과 작업 흐름 정리'),('도구 구현','PowerPoint / Excel 업무를 지원하는 자동화 도구 구현'),('결과 정리와 인수인계','최종 결과 보고서 및 인수인계 문서 작성')])
rect(442,568,702,87)
t('공개 범위',460,580,664,13,True,GREEN)
t('회사 외부 공개 허가가 확인되지 않아 담당 업무만 기재했습니다.<br/>내부 화면, 파일, 소스 코드와 구체적인 업무 자료는 포함하지 않았습니다.',460,607,664,12,color=MUTED)
c.showPage()

page(4,'03 / TEAM PROJECT','Drilling | Unity 기반 채굴 탐험 게임','메인 개발자  |  8인 팀: 개발자 5명 · 디자이너 3명  |  Unity · C# · Steam')
pic('Drilling01.png',56,184,578,330)
t('실제 게임 화면',56,522,578,10,color=MUTED)
t('광물을 모으고 드릴을 강화하며<br/>지하를 탐험하는 캐주얼 게임입니다.',56,558,578,21,True)
link('Steam 페이지 열기 →','https://store.steampowered.com/app/4304980/Drilling/',56,655,578)
x=683;w=461
y=block('인벤토리 · 상점 · 업그레이드','획득한 광물을 관리하는 인벤토리와 상점, 드릴 성능을 높이는 업그레이드 시스템을 구현했습니다. 수집한 자원이 게임 진행에 쓰이도록 기능을 연결했습니다.',x,185,w)
y=block('미니게임과 보상','탐험 중 등장하는 미니게임의 맵 로직과 성공 여부에 따른 보상 처리를 개발했습니다.',x,y+10,w)
y=block('팀 개발과 출시','기획·아트 작업과 맞춰 게임플레이 기능을 개발하고, Steam 데모 출시를 위한 QA에 참여했습니다.',x,y+10,w)
rect(x,591,w,74);t('결과',x+17,601,w-34,12,True,GREEN);t('Steam 데모 출시',x+17,628,w-34,18,True)
c.showPage()

page(5,'04 / PERSONAL PROJECT','VisionLab | 웹캠으로 심박수와 퍼스널 컬러 측정','개인 개발 · 기획, 분석 로직 연결, 웹 화면 및 배포  |  TypeScript · Next.js · MediaPipe · ONNX Runtime Web')
section('HeartPulse / 심박수 추정',56,187,516)
section('PersonalFrame / 퍼스널 컬러 분석',628,187,516)
t('얼굴 영상에서 맥박 신호를 추출',56,247,516,22,True)
t('피부의 미세한 색 변화에서 맥박 신호를 얻는 rPPG 방식입니다. 웹캠에서 얼굴 영역을 찾고, 시간에 따른 색 변화를 분석해 심박수 추정값을 표시합니다.',56,296,516,14)
steps(56,389,516,[('MediaPipe로 얼굴 영역 추적','영상에서 피부 영역을 찾고 RGB 변화 수집'),('신호 처리와 심박수 계산','POS 방식 등 rPPG 처리와 주파수 분석을 웹 환경에 연결')])
t('직접 구현한 부분',56,593,516,14,True,GREEN)
t('POS 알고리즘을 웹 환경으로 포팅하고 신호 처리와 모델 실행 환경을 구성했습니다. 영상 입력부터 분석 결과 표시까지 직접 연결했습니다.',56,624,516,13)
t('조명 영향을 보정한 피부색 분석',628,247,516,22,True)
t('같은 얼굴도 주변 조명에 따라 다르게 촬영됩니다. 피부색과 주변 광원 정보를 순차적으로 수집하고, 색을 보정한 뒤 퍼스널 컬러 톤을 분류합니다.',628,296,516,14)
steps(628,389,516,[('피부색 · 주변광 측정','전·후면 카메라의 샘플을 이용해 Gray World 방식으로 보정'),('CIELAB 기반 톤 분류','밝기와 색 성분으로 웜·쿨 및 계절 톤을 계산하는 규칙 적용')])
t('분석 방식',628,593,516,14,True,GREEN)
t('얼굴 인식 모델과 색채 계산을 함께 사용했습니다. 퍼스널 컬러 분류를 모두 AI가 판단하는 방식은 아니며, 규칙 기반 색 분석이 포함됩니다.',628,624,516,13)
link('VisionLab 체험 →','https://skillprac.vercel.app/',56,688,200)
t('실험용 서비스로 의료 진단·전문 색채 진단을 대신하지 않습니다. 카메라·데이터 처리 고지 확인 후 체험하세요.',292,688,852,10,color=MUTED)
c.save()
r=PdfReader(str(PDF));assert len(r.pages)==5;assert PDF.stat().st_size<50*1024*1024
for p in r.pages:assert len(p.extract_text())>150
d=pdfium.PdfDocument(str(PDF))
for i in range(len(d)):d[i].render(scale=1.05).to_pil().save(TMP/f'profile-{i+1}.png')
print('pages=5 bytes='+str(PDF.stat().st_size))
