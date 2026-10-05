from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from pypdf import PdfReader
import pypdfium2 as pdfium

ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
TMP=ROOT/'tmp/pdfs'
TMP.mkdir(parents=True,exist_ok=True)
pdfmetrics.registerFont(TTFont('KR','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('KRB','C:/Windows/Fonts/malgunbd.ttf'))
W,H=595.276,841.89
INK='#252c29'; MUTED='#626e66'; GREEN='#315b48'; LINE='#dfe6e0'; BG='#f4f6f4'; PURPLE='#887399'
pdf=OUT/'지우가람_SK하이닉스_AI_포트폴리오.pdf'
c=canvas.Canvas(str(pdf),pagesize=(W,H))
c.setTitle('지우가람 | AI 활용 프로젝트 포트폴리오')
c.setAuthor('지우가람')

def text(s,x,y,size=10,color=INK,bold=False,width=499):
    st=ParagraphStyle('p',fontName='KRB' if bold else 'KR',fontSize=size,leading=size*1.65,textColor=HexColor(color),wordWrap='CJK')
    p=Paragraph(s,st); _,h=p.wrap(width,1000)
    assert y+h<790, (s,y,h)
    p.drawOn(c,x,H-y-h)
    return y+h
def line(y):
    c.setStrokeColor(HexColor(LINE)); c.setLineWidth(.7); c.line(48,H-y,W-48,H-y)
def start(n,kicker,title,sub):
    c.setFillColor(HexColor('#fcfdfc'));c.rect(0,0,W,H,fill=1,stroke=0)
    text('GARAM',48,27,12,GREEN,True)
    text('AI PROJECT PORTFOLIO  /  2026',330,30,8,MUTED,width=220)
    line(62)
    text(kicker,48,88,9,GREEN,True)
    text(title,48,111,25,INK,True)
    text(sub,48,162,10,MUTED)
    line(795)
    text('지우가람  ·  SK하이닉스 AI 해커톤 제출용',48,804,8,MUTED) if False else None
    c.setFont('KR',8);c.setFillColor(HexColor(MUTED));c.drawString(48,25,'지우가람  /  AI 활용 프로젝트');c.drawRightString(W-48,25,f'{n:02d} / 05')
def box(y,title,body,color=GREEN):
    c.setFillColor(HexColor(BG));c.roundRect(48,H-y-100,499,100,8,fill=1,stroke=0)
    text(title,64,y+13,12,color,True,width=467)
    text(body,64,y+42,10,INK,width=467)
def block(y,label,body,width=499,x=48):
    y=text(label,x,y,11,GREEN,True,width=width)
    return text(body,x,y+7,10,INK,width=width)+18
def link(label,url,y):
    h=text(label+'  '+url,48,y,9,GREEN)
    c.linkURL(url,(48,H-h,547,H-y),relative=0,thickness=0)
def flow(y,labels):
    gap=12;bw=(499-gap*(len(labels)-1))/len(labels)
    for i,s in enumerate(labels):
        x=48+i*(bw+gap)
        c.setFillColor(HexColor(BG));c.roundRect(x,H-y-59,bw,59,6,fill=1,stroke=0)
        text(s,x+10,y+12,9,GREEN,True,bw-20)
        if i<len(labels)-1: text('>',x+bw+2,y+17,10,MUTED,width=12)
def pic(path,x,y,w,maxh):
    im=ImageReader(str(path));iw,ih=im.getSize();h=min(w*ih/iw,maxh);dw=h*iw/ih
    c.drawImage(im,x,H-y-h,width=dw,height=h,preserveAspectRatio=True,mask='auto')
    return h

start(1,'SELECTED WORK / 문제에서 결과물까지','AI를 기능으로 연결하는 개발자','지우가람  |  Game · Web · AI')
text('모델의 답변보다,<br/>사용자가 쓸 수 있는 결과물을 만듭니다.',48,222,23,INK,True)
text('경기 데이터를 코칭으로, 웹캠 인식을 3D 움직임으로 연결했습니다.<br/>문제를 나누고, AI의 역할을 정하고, 서비스에 통합하는 개발 경험을 정리했습니다.',48,321,11,MUTED)
box(400,'Riot Report  /  Gemini 기반 AI 코칭','경기·타임라인 데이터에서 지표를 계산하고, 개인별 설명과 훈련 과제를 생성하는 웹 서비스. 개인 프로젝트 · 배포 링크 수록.')
box(517,'VisionLab  /  비전 모델과 3D 인터랙션','MediaPipe 기반 추적과 아바타 구동, ONNX 기반 비전 실험을 웹 앱으로 구성. 개인 프로젝트 · 배포 링크 수록.',PURPLE)
text('추가 경험',48,652,11,GREEN,True)
text('스마트 미러 음성 비서 · 기계 부품 AI 학습 도우미 · CNN 동작 이미지 분류',48,678,10)
text('제출 범위: 공개 가능한 개인·팀 프로젝트의 기능과 본인 역할만 정리했습니다.<br/>비공개 소스는 첨부하지 않았으며, 성능을 보증하는 수치나 미확인 수상 이력은 제외했습니다.',48,724,8.5,MUTED)
c.showPage()

start(2,'WEB / GENERATIVE AI','Riot Report','개인 프로젝트  |  백엔드·프론트엔드·AI 리포트 생성기 설계 및 구현')
box(209,'결과물: 전적을 행동 지침으로 바꾸는 AI 리포트','종합 코칭 · 데스 분석 · 라인전 분석 · 구간 흐름과 미션을 제공하는 웹 서비스. FastAPI, Next.js, Gemini, PostgreSQL을 연결했습니다.')
flow(332,['Riot API<br/>경기·타임라인','서버 계산<br/>지표·백분위','Gemini<br/>설명·훈련 과제','웹 화면<br/>리포트 제공'])
y=block(417,'문제','승률이나 KDA만으로는 무엇을 연습해야 할지 파악하기 어렵습니다. 경기 데이터를 해석해 다음 행동으로 연결하는 것이 목표였습니다.')
y=block(y,'AI 활용과 구현','같은 티어·포지션 기준의 지표와 경기 정보를 Gemini에 전달하고, 강점·약점과 다음 경기의 훈련 과제를 생성하도록 구성했습니다. 데이터 계산은 서버가, 설명 생성은 LLM이 담당합니다.')
y=block(y,'신뢰성을 위한 처리','부족한 지표는 null로 전달하고 추정을 금지하는 지시를 적용했습니다. JSON 출력 형식과 비동기 호출을 사용했습니다. 이 설계는 환각을 줄이기 위한 것이며, 코칭의 정확성이나 실력 향상을 보증하지 않습니다.')
link('서비스', 'https://riot-report.onrender.com',715)
text('소스 비공개: Riot_Report  |  구현 근거: ai_agent.py, baseline.py, report_parser.py<br/>Render 환경과 외부 API 상태에 따라 첫 응답 또는 리포트 생성에 시간이 걸릴 수 있습니다.',48,747,8,MUTED)
c.showPage()

start(3,'COMPUTER VISION / INTERACTIVE WEB','VisionLab','개인 프로젝트  |  비전 처리 흐름·3D 모션 연동·웹 앱 설계 및 구현')
box(209,'결과물: 웹캠으로 조작하는 비전 앱 모음','VRM Capture, HeartPulse, PersonalFrame, PokéMatch를 웹에서 체험할 수 있도록 구성했습니다. 대표 사례는 실시간 3D 아바타 구동입니다.',PURPLE)
flow(332,['웹캠 프레임','MediaPipe<br/>얼굴·손·포즈','회전 보정<br/>추적 상태 처리','three.js / VRM<br/>아바타 구동'])
y=block(417,'문제','사전학습 모델의 좌표를 캐릭터에 그대로 연결하면 손목 회전이 어긋나거나, 신체 일부가 보이지 않을 때 전체 움직임이 멈추는 문제가 생깁니다.')
y=block(y,'AI 활용과 구현','MediaPipe와 Kalidokit, three-vrm을 연결하고 손목 회전 보정 및 부위별 추적 상태 처리를 구현했습니다. 프레임별 모델 실행 계획과 직전 인식 결과 유지 로직을 분리해 움직임의 연속성을 다뤘습니다.')
y=block(y,'기여 범위와 한계','모델 자체를 개발한 것이 아니라 사전학습 모델을 통합하고 후처리·화면·테스트를 구현했습니다. 생체 신호 기능은 실험용이며 의료적 정확도를 주장하지 않습니다. Gesture Synth는 외부 제작자의 임베드로 본인 성과에서 제외했습니다.')
link('서비스', 'https://skillprac.vercel.app/',715)
text('소스 비공개: WebCam  |  구현 근거: lib/vrm, tests, lib/pokematch<br/>브라우저 처리와 외부 API·업로드 기능이 공존합니다. 카메라·개인정보 고지를 확인한 뒤 체험하세요.',48,747,8,MUTED)
c.showPage()

start(4,'TEAM PROJECTS / AI를 사용자 기능으로','대화에서 실행과 학습으로','팀 결과물과 본인 담당 범위를 구분했습니다. 소스는 비공개입니다.')
text('스마트 미러 / DevGotchi',48,213,16,INK,True)
pic(ROOT/'DevGotchi00.png',48,253,250,128)
text('기존 프로젝트 실행 화면',48,386,8,MUTED)
text('문제',322,253,10,GREEN,True,width=225)
text('음성 대화를 일정·타이머 같은 실제 생활 기능으로 연결하기.',322,276,10,width=225)
text('AI 도구',322,330,10,GREEN,True,width=225)
text('MiniMax LLM · 음성 인식<br/>MediaPipe · OpenCV · Flask',322,351,10,width=225)
text('본인 역할: 풀스택 구조 설계, LLM·음성 인식과 앱 연동.<br/>결과물: 음성 비서와 타이머·일정 기능, 자세 상태를 반영하는 가상 펫 웹앱.<br/>근거: On-Life의 brain.py, app.py 및 기존 실행 화면.',48,411,10)
line(481)
text('Infotive / 기계 부품 AI 학습 도우미',48,506,16,INK,True)
pic(ROOT/'Blaybus03.png',48,549,111,194)
text('문제와 AI 활용',184,549,10,GREEN,True,width=363)
text('3D 기계 부품을 관찰하는 화면에서 해당 부품에 대한 설명을 함께 얻도록 구성했습니다. 선택한 부품 정보와 사용자 질문을 OpenAI API에 전달하는 학습 어시스턴트입니다.',184,576,10,width=363)
text('본인 역할과 결과',184,650,10,GREEN,True,width=363)
text('Three.js 3D 뷰어 구현과 AI 어시스턴트 구조 설계에 참여했습니다. 부품 설명·질의응답·학습 퀴즈가 연결된 팀 프로토타입입니다.',184,677,10,width=363)
text('기존 프로젝트 화면  |  구현 근거: Infotive / assistant/services/ai_service.py',48,758,8,MUTED)
c.showPage()

start(5,'FOUNDATION / 모델 학습에서 서비스 통합으로','CNN 기반 수어 동작 이미지 분류','팀 프로젝트  |  학습 시스템 개발 및 ResNet-18 적용 담당')
box(209,'결과물: 제한된 동작을 구분하는 이미지 분류 프로토타입','ResNet-18과 OpenCV를 이용해 5종 동작 이미지로 학습하고, 입력 이미지의 동작 종류를 판별하는 과정을 구성했습니다.')
flow(332,['동작 이미지<br/>데이터 준비','OpenCV<br/>프레임 처리','ResNet-18<br/>학습·분류','동작 종류<br/>출력 확인'])
y=block(418,'문제와 접근','수어 동작을 시각적으로 구분해 문자로 연결할 수 있는지 탐색했습니다. 제한된 동작 집합을 이미지 분류 문제로 정의하고 모델 학습과 입력 처리 과정을 구성했습니다.')
y=block(y,'확인 가능한 범위','기존 연구 포스터에는 5종 동작을 학습한 이미지 분류 결과가 기록되어 있습니다. 연속 수어의 문장 번역이나 범용 실시간 통역을 완성한 것으로 표현하지 않았습니다. 정확도와 FPS는 평가 조건을 재확인하지 못해 기재하지 않았습니다.')
line(614)
text('프로젝트를 관통하는 접근',48,640,14,GREEN,True)
text('데이터와 모델의 역할을 구분하고, 사용자가 확인할 수 있는 출력으로 연결합니다. 초기의 이미지 분류 경험에서 출발해, 현재는 LLM 리포트와 비전 기반 웹 서비스까지 구현 범위를 확장했습니다.',48,677,11)
text('증빙 기준: 기존 연구 포스터(CNN00.png) 및 포트폴리오의 담당 역할 기록.<br/>이 문서는 기능·구현 자료를 요약한 것으로, 전체 서비스에 대한 독립 성능평가 보고서는 아닙니다.',48,750,8,MUTED)
c.save()

reader=PdfReader(str(pdf))
assert len(reader.pages)==5
assert pdf.stat().st_size<50*1024*1024
for i,p in enumerate(reader.pages):
    assert len(p.extract_text())>150
doc=pdfium.PdfDocument(str(pdf))
for i in range(len(doc)):
    doc[i].render(scale=1.15).to_pil().save(TMP/f'portfolio-{i+1}.png')
draft=(OUT/'AI_활용_경험.txt').read_text(encoding='utf-8').strip()
assert len(draft)<=2000
print(f'PDF: {pdf}\nPages: 5 / bytes: {pdf.stat().st_size}\nDraft characters including whitespace: {len(draft)}')
