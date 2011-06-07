FROM rastasheep/ubuntu-sshd:14.04

RUN apt-get update
RUN apt-get install -y git
RUN git config --system daemon.uploadarch true
COPY /ssh/id_rsa.pub /root/.ssh/authorized_keys
RUN mkdir -p /srv/git
VOLUME /srv/git
COPY /git-daemon /etc/init.d/git-daemon
RUN chmod +x /etc/init.d/git-daemon
EXPOSE 22
EXPOSE 9418
CMD /etc/init.d/git-daemon start && /usr/sbin/sshd -D
