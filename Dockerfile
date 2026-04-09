FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files (HTML, CSS, JS)
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx (keeps container running)
CMD ["nginx", "-g", "daemon off;"]
