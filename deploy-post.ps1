# deploy-post.ps1 — Agentes publicam posts automaticamente
# Uso: powershell -File deploy-post.ps1 "titulo-do-post" "Titulo do Post" "2026-05-15" "Conteudo em markdown..."

param(
    [string]$slug,
    [string]$title,
    [string]$date,
    [string]$content
)

$blogDir = "$env:USERPROFILE\blog-automacao"

# 1. Salvar post em content/posts/
$postFile = "$blogDir\content\posts\$slug.md"
$frontmatter = @"
---
title: "$title"
date: "$date"
tags: ["Automação", "IA"]
description: "Post gerado pelo time de agentes DeepSeek + Claw3D"
---

$content
"@
$frontmatter | Set-Content $postFile -Encoding UTF8
Write-Host "Post salvo: $postFile"

# 2. Git commit + push
Set-Location $blogDir
git add content/posts/$slug.md
git commit -m "post: $title [auto-agentes]"
git push

Write-Host "✅ Post publicado! Deploy automatico via Vercel em ~30s"
Write-Host "🌐 https://blog-automacao-beryl.vercel.app/blog/$slug"
