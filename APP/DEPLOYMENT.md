# Deployment Guide

## Environments
- **Production**: https://yourapp.com
- **Staging**: https://staging.yourapp.com

## Deployment Process
1. Merge feature branches to `develop` for staging deployment
2. After testing, create PR from `develop` to `main`
3. Merge to `main` triggers production deployment

## Rollback Procedure
### Frontend (Vercel)
1. Go to Vercel dashboard
2. Navigate to deployments
3. Click "..." on previous deployment
4. Select "Promote to Production"

### Backend (Render)
1. Go to Render dashboard
2. Navigate to deployments
3. Click "Rollback" on previous deployment

## Database Backups
- Automated daily backups in MongoDB Atlas
- Retention: 30 days