FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ben-Monster/Naughty-girl.git
WORKDIR /skl/Raganork
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
