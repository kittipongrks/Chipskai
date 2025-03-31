FROM alpine
COPY files /myfiles
CMD ["/myfiles/entrypoint.sh"]