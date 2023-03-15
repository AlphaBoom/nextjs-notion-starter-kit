
import { host } from '@/lib/config'

export default function handler(req, res){
    res.send(`User-agent: *
Allow: /
Disallow: /api/get-tweet-ast/*
Disallow: /api/search-notion
    
Sitemap: ${host}/sitemap.xml
    `);
}