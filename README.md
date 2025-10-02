# Project Setup Guide
Follow these steps to get the project running locally:

## 1. Copy Environment File
```bash
cp .env.example .env
```

## 2. Install PHP Dependencies
```bash
composer install
```

## 3. Install Node.js Dependencies
```bash
# Recommended
npm install

# If you face peer dependency issues:
npm install --legacy-peer-deps
```

## 4. Generate Application Key
```bash
php artisan key:generate
```

## 5. Configure Database
Open the `.env` file and update the following values with your database credentials:
```
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

## 6. Run Database Migrations
```bash
php artisan migrate
```

## 7. Build Frontend Assets
```bash
npm run dev
```

## 8. Start the Development Server
```bash
php artisan serve
```

✅ Now you can access the application at: **http://127.0.0.1:8000**
