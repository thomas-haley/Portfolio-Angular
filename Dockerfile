FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

RUN ng build --configuration production

#RUN ls -R /app

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html/portfolio-site \
	&& chmod -R 755 /usr/share/nginx/html/portfolio-site

RUN find /usr/share/nginx/html/portfolio-site/ -type d -exec chmod 755 {} \;

#RUN ls -R /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 81:80


CMD ["nginx", "-g", "daemon off;"]
#RUN npm update
#RUN npm install -g @angular/cli
#RUN npm install
#RUN npm install -g http-server

#RUN ng build --configuration production
#EXPOSE 81:4200
#CMD ["http-server", ".\dist"]
#CMD ["ng", "build", "--configuration", "production"]
#CMD ["ng", "serve", "--host", "0.0.0.0"]
