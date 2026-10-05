from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.colors import HexColor
from pypdf import PdfReader
import pypdfium2 as pdfium

OUT=Path(__file__).resolve().parent
TMP=OUT.parents[1]/'tmp/pdfs'
TMP.mkdir(parents=True,exist_ok=True)
pdfmetrics.registerFont(TTFont('KR','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('KB','C:/Windows/Fonts/malgunbd.ttf'))
W,H=960,600
INK='#262c29'; GREEN='#315b48'; MUTED='#67716b'; LINE='#dce3de'; BG='#f3f6f4'
PDF=OUT/'지우가람_SK하이닉스_AI_포트폴리오_수정본.pdf'
c=canvas.Canvas(str(PDF),pagesize=(W,H));c.setTitle('지우가람 | AI 프로젝트 포트폴리오');c.setAuthor('지우가람')

def txt(s,x,y,w=864,size=12,bold=False,color=INK):
    p=Paragraph(s,ParagraphStyle('t',fontName='KB' if bold else 'KR',fontSize=size,leading=size*1.55,textColor=HexColor(color),wordWrap='CJK'))
    _,h=p.wrap(w,1000)
    assert y+h<560,(s,y,h)
    p.drawOn(c,x,H-y-h);return y+h
def rule(x,y,w=864):
    c.setStrokeColor(HexColor(LINE));c.setLineWidth(.8);c.line(x,H-y,x+w,H-y)
def rect(x,y,w,h):
    c.setFillColor(HexColor(BG));c.roundRect(x,H-y-h,w,h,6,stroke=0,fill=1)
def head(n,label,title,sub):
    c.bookmarkPage(f'p{n}');c.addOutlineEntry(title,f'p{n}',0)
    txt('지우가람',48,22,size=10,bold=True,color=GREEN)
    txt('SK하이닉스 AI 해커톤 2026',700,22,w=212,size=9,color=MUTED)
    rule(48,49)
    txt(label,48,69,size=10,bold=True,color=GREEN)
    txt(title,48,91,size=28,bold=True)
    txt(sub,48,140,size=11,color=MUTED)
    rule(48,566)
    c.setFont('KR',9);c.setFillColor(HexColor(MUTED));c.drawString(48,17,'AI 프로젝트 포트폴리오');c.drawRightString(912,17,f'{n} / 3')
def section(label,x,y,w):
    txt(label,x,y,w,size=15,bold=True);rule(x,y+30,w)
def url(label,address,x,y,w):
    h=txt(label,x,y,w,size=10,bold=True,color=GREEN)
    c.linkURL(address,(x,H-h,x+w,H-y),relative=0,thickness=0)
def jump(label,page,x,y,w):
    h=txt(label,x,y,w,size=11,bold=True,color=GREEN)
    c.linkRect('',f'p{page}',(x,H-h,x+w,H-y),relative=0,thickness=0)
def flow(y,labels):
    bw=201
    for i,(a,b) in enumerate(labels):
        x=48+i*221;rect(x,y,bw,72)
        txt(a,x+15,y+11,bw-30,12,True,GREEN)
        txt(b,x+15,y+35,bw-30,10,color=MUTED)
        if i<3:txt('>',x+bw+6,y+24,14,12,color=MUTED)

head(1,'PROFILE & PROJECTS','지우가람 | AI 프로젝트','개인 개발 프로젝트 2건 · 문제와 구현 내용 중심으로 정리')
section('소개',48,198,227)
txt('Python으로 데이터를 처리하고,<br/>AI 기능을 웹 서비스에 붙여<br/>배포하는 작업을 해왔습니다.',48,244,227,14)
txt('부산대학교 재학',48,329,227,11)
txt('2025.03 - 현재',48,351,227,10,color=MUTED)
url('rkfka04101212@gmail.com','mailto:rkfka04101212@gmail.com',48,398,227)
txt('본인 역할',48,450,227,11,True,GREEN)
txt('두 프로젝트 모두 개인 개발<br/>설계 · 구현 · 배포 담당',48,476,227,11)

section('대표 프로젝트',315,198,365)
txt('Riot Report',315,244,365,17,True)
txt('경기 지표를 바탕으로 코칭 리포트 생성',315,275,365,12)
txt('Gemini · FastAPI · Next.js<br/>수치 계산과 AI 설명을 분리한 리포트 구조',315,306,365,10,color=MUTED)
jump('문제 해결 과정 보기  →  2쪽',2,315,353,365)
rule(315,386,365)
txt('VisionLab / VRM Capture',315,409,365,17,True)
txt('웹캠으로 3D 캐릭터의 표정과 자세 구동',315,440,365,12)
txt('MediaPipe · Kalidokit · three.js<br/>손목 회전 오류와 추적 끊김 처리',315,471,365,10,color=MUTED)
jump('문제 해결 과정 보기  →  3쪽',3,315,518,365)

section('프로젝트에 사용한 기술',720,198,192)
txt('LLM / 데이터',720,244,192,11,True,GREEN)
txt('Gemini API<br/>Python · PostgreSQL',720,270,192,11)
txt('비전 / 화면',720,332,192,11,True,GREEN)
txt('MediaPipe · three.js<br/>TypeScript · Next.js',720,358,192,11)
txt('배포',720,420,192,11,True,GREEN)
txt('Render · Vercel',720,446,192,11)
txt('소스 비공개<br/>배포 링크는 상세 페이지에 수록',720,504,192,9,color=MUTED)
c.showPage()

head(2,'PROJECT 01 / RIOT REPORT','전적 수치를 읽고, 다음 경기의 연습 과제로','개인 개발 · 경기 데이터 처리, Gemini 연동, 리포트 화면 및 배포 담당')
flow(190,[('경기 데이터','Riot API · 경기와 타임라인'),('지표 계산','서버에서 수치·백분위 계산'),('AI 코칭','Gemini에 계산 결과 전달'),('리포트 화면','강점·약점과 훈련 과제 제공')])
section('풀고 싶었던 문제',48,292,244)
txt('승률과 KDA를 확인해도<br/>다음 경기에서 무엇을 바꿔야<br/>할지는 알기 어렵습니다.',48,340,244,13)
txt('전적 검색에 그치지 않고,<br/>계산된 지표를 근거로 연습할<br/>내용을 제시하도록 만들었습니다.',48,415,244,11,color=MUTED)
section('내가 구현한 부분',326,292,318)
txt('수치 계산은 서버, 설명은 Gemini',326,340,318,12,True,GREEN)
txt('경기·타임라인을 분석한 지표를 JSON으로 전달했습니다. 같은 티어·포지션을 기준으로 비교하고, 강점과 약점을 설명하도록 구성했습니다.',326,369,318,11)
txt('데이터가 없으면 추정하지 않도록 처리',326,439,318,12,True,GREEN)
txt('표본이 부족한 값은 null로 전달하고 추정을 금지했습니다. AI 응답은 JSON 형식으로 받아 화면에 연결했습니다.',326,468,318,11)
section('완성한 기능',680,292,232)
txt('종합 코칭<br/>데스 분석<br/>라인전 분석<br/>구간 흐름과 미션',680,340,232,13,True)
url('배포 서비스 열기 →','https://riot-report.onrender.com',680,451,232)
txt('riot-report.onrender.com',680,477,232,9,color=MUTED)
txt('첫 접속 시 서버 기동 대기가 있을 수 있습니다. AI 조언의 정확성을 보증하지 않습니다.',680,504,232,9,color=MUTED)
c.showPage()

head(3,'PROJECT 02 / VISIONLAB','웹캠 추적 결과를 3D 캐릭터에 맞게 보정','개인 개발 · VisionLab 중 VRM Capture의 모션 연동과 오류 처리 사례')
flow(190,[('웹캠','얼굴·손·몸의 영상 입력'),('MediaPipe','부위별 좌표와 추적 결과'),('보정 로직','좌우 대응 · 손목 회전 · 상태 유지'),('3D 캐릭터','three-vrm · three.js로 렌더링')])
section('연결 후 생긴 문제',48,292,244)
txt('손목이 비틀리거나,<br/>몸 일부가 화면에서 사라지면<br/>캐릭터의 자세가 멈췄습니다.',48,340,244,13)
txt('인식 모델을 연결하는 것만으로는<br/>자연스러운 움직임이 나오지 않아,<br/>좌표를 적용하는 과정을 수정했습니다.',48,415,244,11,color=MUTED)
section('수정한 내용',326,292,318)
txt('손목 회전과 부위별 추적을 따로 처리',326,340,318,12,True,GREEN)
txt('손바닥 방향을 이용한 손목 회전 계산을 적용했습니다. 신체 일부가 보이지 않아도 추적 가능한 부위는 계속 반영하도록 분리했습니다.',326,369,318,11)
txt('추론 실행 주기와 직전 결과 유지',326,439,318,12,True,GREEN)
txt('프레임별 모델 실행 계획을 나누고, 인식이 잠깐 끊기면 직전 결과를 유지하도록 처리했습니다. 관련 로직은 테스트 단위로 분리했습니다.',326,468,318,11)
section('구현 범위',680,292,232)
txt('얼굴 · 손 · 포즈 추적<br/>3D 아바타 구동<br/>회전 보정 및 끊김 처리',680,340,232,13,True)
txt('사전학습 모델과 라이브러리를 사용했으며, 연동·후처리·웹 화면을 구현했습니다.',680,410,232,10,color=MUTED)
url('배포 서비스 열기 →','https://skillprac.vercel.app/vrmmotion',680,468,232)
txt('skillprac.vercel.app/vrmmotion',680,494,232,9,color=MUTED)
txt('카메라 사용 전 개인정보 고지를 확인하세요.',680,521,232,9,color=MUTED)
c.save()
r=PdfReader(str(PDF));assert len(r.pages)==3
assert PDF.stat().st_size<50*1024*1024
for page in r.pages:assert len(page.extract_text())>200
d=pdfium.PdfDocument(str(PDF))
for i in range(len(d)):d[i].render(scale=1.3).to_pil().save(TMP/f'revised-{i+1}.png')
print('pages=3 bytes='+str(PDF.stat().st_size))
