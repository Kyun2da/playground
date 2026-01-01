# Send Newsletter Skill

블로그에 새 글을 올린 후 구독자들에게 뉴스레터를 발송합니다.

## 사용법

```
/send-newsletter [slug]
```

- `slug`: 발송할 포스트의 slug (선택사항, 없으면 최근 글)

## 실행 방법

1. slug가 제공되지 않은 경우, `apps/blog/src/content/posts/` 디렉토리에서 가장 최근 포스트의 slug를 찾습니다.

2. `apps/blog/.env` 파일에서 `NEWSLETTER_ADMIN_SECRET` 값을 읽습니다.

3. 다음 curl 명령어로 뉴스레터를 발송합니다:

```bash
source apps/blog/.env && curl -L -X POST "https://www.kyun2da.dev/api/send-newsletter" \
  -H "Content-Type: application/json" \
  -d "{\"secret\":\"$NEWSLETTER_ADMIN_SECRET\",\"slug\":\"[SLUG]\"}"
```

4. 응답을 확인하고 결과를 사용자에게 알려줍니다:
   - 성공: `{"success":true,"message":"N명에게 발송 완료, 0명 실패","total":N}`
   - 실패: 에러 메시지 출력

## 예시

```
/send-newsletter prospective2025
```

위 명령은 `prospective2025` 포스트에 대한 뉴스레터를 모든 구독자에게 발송합니다.
